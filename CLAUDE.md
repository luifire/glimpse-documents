# CLAUDE.md — glimpse-documents (read first)

## Role
This repo holds the **public-facing** Glimpse pages: privacy policy, terms, imprint, CSAE policy,
support, delete-account, the app-store listing text, and `get/` — the flyer landing page that routes
a QR scan to the right store. It is deployed by **GitHub Pages** from `main`.

**Everything here is world-readable the moment `main` is pushed.** Treat a push as publishing: no
real user data, no unreviewed legal wording, no internal notes.

The apps live in the sibling repos `../glimpse-android` and `../glimpse-ios`, the backend and the
cross-platform contracts in `../glimpse-shared`. Refer to siblings relatively, never by absolute path.

## Git workflow — CRITICAL
- **Only ever work on `main`.** Commit and push directly to `main`; never create a feature branch on
  your own. This is a provisional simplification with a concrete reason: there is currently exactly
  **one developer**, so a branch buys a review nobody performs and only costs a merge later.
- **If you find the repo on another branch, ask the user before committing.** Do not silently commit
  onto it, and do not silently fold it into `main` either — the answer decides which of the two
  happens. Once resolved, leave the repo on `main` with no branch behind.
- **The day a second person works on this repo, this rule is wrong — delete it** instead of working
  around it.
- Because `main` *is* the live site, say what a push will publish before you push it.
- If `git push` over the default remote times out on port 22, the network is blocking outbound SSH —
  route over GitHub's 443 endpoint instead (`ssh -o HostName=ssh.github.com -o Port=443`, or the
  one-off remote `ssh://git@ssh.github.com:443/luifire/glimpse-documents.git`). This is a per-network
  quirk, not a property of the repo.

## Content rules
- The pages are **bilingual (EN + DE)**; a change to one language belongs in the other in the same
  change, or the two versions start promising different things.
- What the privacy policy claims about collection and retention must match reality — the authoritative
  checklist is `../glimpse-shared/docs/age_gate_data_safety.md`. Read it before editing any
  data-protection wording.
- Public install links (used by the flyer, QR codes and the support page):
  - Android — `https://play.google.com/store/apps/details?id=com.luifire.glimpse`
  - iPhone, open beta — `https://testflight.apple.com/join/fv2p49fh`
