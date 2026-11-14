# Profiles Library 2.0 source snapshot

Snapshot date: 2026-10-25

Fixed/offline sources:
- Decaid's own bundled defaults are read from `/api/v1/profiles/defaults` and are already shipped inside Decaid.
- Additional JSON snapshots in `snapshot/` are copied as release-time snapshots from `Kulitorum/Decenza/resources/profiles`, with source SHA recorded in `snapshot-manifest.json`.

Online index sources:
- decentespresso/de1app `de1plus/profiles`
- Kulitorum/Decenza `resources/profiles`
- decentespresso/decaid `assets/defaultProfiles`
- qporzk/Decent-Docs `assets/profiles`
- Decent community collection fixed URLs (Nu Skool, Strega, Turbo, etc.)

The plugin imports only after the user taps Import. It never activates a profile automatically.
