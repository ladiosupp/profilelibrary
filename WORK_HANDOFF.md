# Profiles Library 2.0 — Work Handoff

## Project
A Decaid plugin named **Profiles Library**. Its product scope is intentionally narrow: discover profile libraries and import profiles into Decaid. It must not activate profiles, start shots, edit machine state, delete profiles, or become a profile editor.

## Current release
- Version: **2.0.0**
- Plugin id: `profiles-library.reaplugin`
- Release artifact: `release/Profiles_Library_v2.0.0.reaplugin.zip`
- Current source is the exact content extracted from that working release ZIP in `source/`.

## Confirmed working state
User has installed 2.0.0 on a real Decaid setup and reported: **“可以用”**.

Previously exercised in mocked API tests before release:
- offline snapshot import
- legacy `settings_2a` pressure conversion
- legacy `settings_2b` flow conversion
- advanced `settings_2c` parsing/import path
- online source refresh
- installed-skin profile discovery/import path

## Offline library model
Do not duplicate Decaid bundled defaults in the plugin package. Decaid already ships a large offline default library. Profiles Library adds an offline snapshot only for useful profiles missing from Decaid defaults.

The 2.0.0 package contains 17 snapshot profiles under `source/snapshot/`, including four E61 variants and additional legacy/community-style profiles. `snapshot-manifest.json` is the package snapshot index.

Important E61 profiles bundled offline:
- E61 espresso machine
- E61 rocketing up to 10 bar
- E61 classic gently up to 10 bar
- E61 with fast preinfusion to 9 bar

The E61 snapshots are frame-based JSON conversions derived from the legacy DE1app behavior rather than merely relabeling a `settings_2a` TCL profile.

## Runtime source model
Catalog entries can come from multiple source classes, but they should converge on one import pipeline producing valid Decaid v2 profile JSON before POSTing to Decaid.

Sources used/considered in 2.0:
- Decaid bundled defaults (runtime discovery/restore)
- packaged offline snapshot
- Decent DE1app profile repository / legacy TCL
- Decenza converted profile corpus
- Decent-Docs / Gagné mirrors
- curated community profile URLs
- installed Decaid skins via WebUI skin APIs / exposed assets/manifests where discoverable

## Import semantics
Use Decaid profile APIs as the source of truth. Decaid uses content-hash based profile identity, so functionally identical profiles are naturally deduplicated. Do not implement title-based hard dedup that prevents an import merely because two profiles share a name.

The plugin should only import. It should not:
- activate the imported profile
- call machine profile upload/start APIs
- alter workflow/current profile
- delete/modify user profiles

## Legacy TCL behavior
Supported families in 2.0 runtime logic:
- `settings_2a` / pressure-style legacy profiles
- `settings_2b` / flow-style legacy profiles
- `settings_2c`, aliases such as `settings_2c2` / advanced frame profiles

When improving conversion, preserve DE1app generation semantics rather than inventing a lossy generic approximation. E61 is a good regression family because it exercises old `settings_2a` behavior.

## Decaid APIs relied on
Key APIs include:
- `GET /api/v1/profiles/defaults`
- `POST /api/v1/profiles/restore/{filename}`
- `POST /api/v1/profiles`
- `GET /api/v1/profiles` or other profile listing endpoint used by current code
- WebUI skin listing/assets APIs for installed-skin discovery

Check the current Decaid docs/source before changing endpoint assumptions.

## Product constraints / non-negotiables
1. **Import only** is the core promise.
2. Offline snapshot must remain usable without internet.
3. Online refresh failure must not break the offline catalog.
4. One bad remote profile must fail locally and not break the whole catalog.
5. Preserve attribution/source metadata where possible.
6. Never silently convert an unsupported legacy profile with guessed semantics.
7. Decaid content-hash identity is the final dedup authority.
8. Keep package installable as a normal Decaid plugin ZIP with a root `manifest.json` and `plugin.js`.

## Immediate next work candidates
- Verify all curated Community URLs, especially Nu Skool / Strega / Hendon variants, and replace fragile links with stable mirrors or package snapshots when licensing/source allows.
- Improve installed-skin discovery by recognizing more common manifest/path conventions without assuming arbitrary filesystem access.
- Add regression fixtures for pressure basic, flow basic, advanced TCL, multiline notes, nested braced TCL values, exit conditions, limiters, and malformed remote sources.
- Add UI status labels for Offline / Online / Installed Skin / Already installed while keeping Decaid hash dedup authoritative.
- Keep maintenance/test/calibration curves hidden by default but searchable via explicit option.

## Files
- `source/plugin.js` — plugin runtime + HTTP/UI/import logic
- `source/manifest.json` — Decaid plugin manifest
- `source/snapshot-manifest.json` — packaged offline snapshot catalog
- `source/snapshot/*.json` — embedded offline profile snapshots
- `source/README.md` — release README
- `source/SOURCES.md` — source attribution/provenance notes
- `release/Profiles_Library_v2.0.0.reaplugin.zip` — exact release user tested successfully

## Working convention
When making a new release, increment version and produce a fresh `.reaplugin.zip`. Preserve the prior working release for rollback. Test install/package shape and the import paths before handing it back to the user.
