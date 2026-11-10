# Changelog

## 0.1.14 - November 2026

### Security 0.1.14

- Removed example client credentials from the README. Earlier published versions contain them in their README and are deprecated; rotate any credentials copied from those examples.

### Fixes 0.1.14

- Build no longer picks up its own output in `dist/`.
- Package now ships only the compiled `dist/src` output, README, LICENSE, notices and changelog.
- Repository, homepage and issue links point to github.com/jupiterbak/ayx-node-ts.
- `AYX_VERSION` now matches the package version.

### Dependencies 0.1.14

- Bumped runtime dependencies (`cross-fetch`, `debug`, `form-data`, `https-proxy-agent`) to current majors; dropped unused leftover dependencies from an earlier CLI.
- Bumped dev tooling (TypeScript 6, ESLint 10 flat config + `typescript-eslint` replacing TSLint, Rollup 4, `@compodoc/compodoc` 2, Mocha 11, Chai 4.5).
- CI now runs on Node 22 with current GitHub Action versions.
- Requires Node.js >= 20.9.

## 0.0.1 - February 2022

### New Features 0.0.1

- Support for Alteryx Server REST API V1 and V2 - 2022/08/03

- Initial version for Alteryx Server REST API V3
