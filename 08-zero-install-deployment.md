# Zero-Install Try: Deployment Plan for a Public Fontra Server

*Follow-up to doc 03 §3.5. Premise: a server is available online. Question: can people use Fontra on it directly, and what blocks it? Everything below is grounded in the actual source (`src/fontra/__main__.py`, `src/fontra/filesystem/projectmanager.py`, `src/fontra/core/fonthandler.py` behavior as visible from the manager). June 2026.*

---

## 1. The good news first

The architecture was built for this. Verified in source:

- `fontra --host 0.0.0.0 filesystem /fonts` serves any folder of fonts over HTTP + WebSocket; the browser client does the heavy rendering/interpolation work, so server load per visitor is modest.
- **`--read-only` already exists** as a flag on the filesystem project manager, enforced server-side per `FontHandler`.
- **Project managers are plugins** (`fontra.projectmanagers` entry point) — a custom demo manager is supported architecture, not a fork.
- Font handlers are created lazily per project and **close themselves when the last client disconnects** (`allConnectionsClosedCallback`) — free memory hygiene.
- Multi-client sync is native: two browsers on one project URL see each other's edits live. The demo's wow-feature costs nothing.
- Precedent exists: the rcjk path (fontra-rcjk + django-robo-cjk behind NGINX) has run multi-user in production at Black Foundry for years.

So: **yes, a usable public deployment is realistic, in two tiers** — a read-only showcase that could be live this week, and an editable sandbox that needs a small, well-defined development effort plus a short security punch list.

## 2. Two deployment tiers

### Tier A — read-only showcase (effort: ~1–2 days)

What visitors get: fontra.xyz links to `try.fontra.xyz` → a landing page of curated fonts → full editor/font-overview experience, sliders and all, on real variable fonts — nothing installable, nothing editable.

```
fontra --host 127.0.0.1 --http-port 8000 filesystem /srv/fonts --read-only
```

behind a TLS reverse proxy. Content: 3–5 OFL fonts chosen to show off — one with nested **variable components** (the thing no other editor shows), one multi-axis text family, one CJK sample. Read-only means strangers share projects safely; they can move sliders and browse freely (view state lives in the URL, per visitor — only *edits* would be shared, and those are blocked).

Honest limitation: look, don't touch. It proves "Fontra runs in a browser" but not "I can design in it."

### Tier B — ephemeral sandboxes (effort: ~1–2 weeks dev)

What visitors get: a **Try Fontra** button → pick a starter (empty font / the doc-07 tutorial font / a variable-components playground) → a private copy at `try.fontra.xyz/s/<random-id>/…` → full editing for a limited lifetime → download your result.

Implementation is a custom project manager — the supported plugin route:

```python
# entry point: [project.entry-points."fontra.projectmanagers"] demo = "fontra_demo:DemoProjectManagerFactory"
class DemoProjectManager:                      # ~200 lines, reuses FileSystemProjectManager logic
    # on "new session": copy template .fontra → /sandboxes/<token>/, return its project URL
    # token = secrets.token_urlsafe(9)  → unguessable URL is the only "auth" needed
    # getProjectList(token) → only that session's fonts   (fixes the flat-list leak)
    # janitor task: delete sandboxes idle > 2h; cap total sandboxes (e.g. 500)
    # quotas: max projects per session, max IPs/hour at the proxy
```

Notes that make this small: sessions need no accounts (capability URLs suffice — and double as the share-to-collaborate feature: send your sandbox URL to a friend, edit together live, which is the best demo of Fontra's collaboration there is). The `.fontra` format is a folder of files — copying a template is a `shutil.copytree`. Cleanup is `rm -rf` plus the existing handler-close machinery.

### Tier C (horizon) — serverless

The roadmap already names it: *Serverless Fontra* (Pyodide/WASM). That's the endgame for zero-install — no server, no sandboxes, no abuse surface, runs on GitHub Pages. Not this quarter's work, but worth keeping in view because it caps how much to invest in Tier B's infrastructure.

## 3. Concrete infrastructure (either tier)

| Piece | Choice | Note |
|---|---|---|
| Host | 1 small VM (2 vCPU / 4 GB, e.g. Hetzner/OVH, ~€10–20/mo) | Client-side rendering keeps server light; this comfortably holds hundreds of concurrent read-only visitors, dozens of active sandboxes |
| DNS | `try.fontra.xyz` | Keep the main site static, as now |
| TLS + proxy | **Caddy** (or NGINX) | Must proxy WebSocket upgrades (`/websocket` paths); Caddy does TLS + websockets with a 5-line config |
| Process | Docker container, `systemd` unit, `restart=always` | Container has **only** the demo fonts and sandbox dir — that *is* the security boundary |
| State | None worth keeping | Sandboxes are disposable → nightly full reset (`docker compose up --force-recreate` at 04:00) doubles as garbage collection and "known-good state" |
| Rate limiting | At the proxy (per-IP connection + request caps) | Core server has none — don't expose it bare |
| Monitoring | Uptime check + disk alert | That's genuinely all a demo needs |

```Caddyfile
try.fontra.xyz {
    reverse_proxy 127.0.0.1:8000      # websockets proxied automatically
    encode gzip
}
```

## 4. What's blocking — the honest list

Ordered by severity; the first three are the real ones.

**B1 — Path handling must be reviewed before public exposure.** `_getProjectPath()` joins URL-derived path parts onto the root (`rootPath.joinpath(*path.split("/"))`) without normalizing — a crafted identifier containing `..` can escape the root (limited to font-extension files, but still: any `.ttf`/`.ufo` on the box). And the documented `'-'` root mode deliberately serves *arbitrary OS paths* — never publicly. Fix is a few lines (`resolve()` + `relative_to(rootPath)` check) and a candidate upstream PR regardless of the demo. The container boundary (nothing on disk but demo fonts) is the belt to this suspender.

**B2 — No download path on a plain server.** "Export as" is provided by an `ExportManager`, and the stock filesystem manager has `exportManager=None` — Fontra Pak supplies its own. A Tier-B visitor could design a font *but not take it home*, which kills the conversion moment ("install your font" is doc 07's payoff). Work item: a small server-side ExportManager that compiles to TTF/OTF in a temp dir and serves it as a download (the compile machinery exists; this is plumbing plus an HTTP route). Tier A doesn't need it.

**B3 — No authentication or tenancy in the core (by design).** `authorize()` returns a constant; `getProjectList()` lists everything under the root. Fine for localhost, fatal for a shared editable server. Tier A sidesteps it (read-only); Tier B's session manager *is* the fix (capability URLs + per-token project lists). No accounts needed — and avoid building any: accounts would drag in GDPR machinery a demo doesn't want.

**B4 — Hardening debt.** The aiohttp server has never faced hostile traffic: no rate limits, unbounded project opens (each loads a backend into memory), large-message handling unaudited. Mitigations are conventional: proxy-level rate caps, `ulimit`/cgroup memory caps, cap on simultaneous font handlers, container isolation, nightly reset. A focused half-day review of the WebSocket message path is worth scheduling rather than assuming.

**B5 — Abuse economics (minor).** No upload endpoint exists in the core server, so visitors can only edit *our* templates — the abuse surface is small (CPU via pathological glyph edits, disk via sandbox churn; both quota-able). Demo fonts must be OFL with attribution kept.

**B6 — Expectation management (UX, not tech).** Ephemeral means people *will* lose work they cared about. Banner from the start: "This sandbox expires in 2 hours — Export to keep your font, or download Fontra Pak (it's free)." The demo's job is to hand off to Pak, not replace it.

**Non-blockers worth saying out loud:** GPLv3 poses no problem (no network copyleft; the source is public anyway). Server capacity is not a concern at demo scale. And nothing about this requires touching Fontra's core except B1's small patch and B2's pluggable export manager.

## 5. Suggested sequence

1. **Week 0 — Tier A live.** Patch B1, curate 3–5 OFL fonts, VM + Caddy + container, link "Try Fontra in your browser →" from fontra.xyz. Immediate marketing value; zero new code besides the path fix.
2. **Weeks 1–3 — Tier B.** `DemoProjectManager` plugin (sessions, quotas, janitor), server ExportManager + download route (B2), proxy rate limits, nightly reset. Ship with three starter templates and the share-URL collaboration hint.
3. **After launch.** Watch two numbers: sandbox-created → font-exported conversion, and try-page → Pak-download click-through. They tell you if the demo earns its keep.
4. **Parallel, low priority.** A one-page RFC on serverless (Pyodide) Fontra — if it looks closer than expected, Tier B stays deliberately minimal.

---

*Open questions: (a) does a Tier-B sandbox keep the full menu (Font info, Axes, Sources) or a trimmed demo UI? I'd keep it full — the point is the real thing. (b) is there appetite to upstream the session manager as an official `fontra-demo` package so other people can run try-servers (workshops, classrooms)? The classroom case might be the sleeper hit: a teacher runs one command, students get sandboxes, no installs on locked-down school machines. (c) who operates it — this is the first piece of Fontra that needs an on-call owner, however informal.*
