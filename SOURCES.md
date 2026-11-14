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

2.0.2 thumbnail reference index:
- `default-previews.json` and embedded `DEFAULT_PREVIEWS`: derived visualization fields for 73 official Decaid defaults from `decentespresso/decaid`, commit `f2248a756f80639c5f96e1fbdd4c426c956fbca4`, `assets/defaultProfiles/manifest.json` and indexed JSON files. Each entry records the original Git blob SHA.
- The index is used for read-only reference thumbnails, with runtime installed data taking priority by exact metadata filename. It contains no full duplicate default profiles and is never used as an import substitute.
- Near-zero negative numeric float noise is clipped to zero only in the visualization data.
