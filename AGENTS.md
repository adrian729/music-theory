# music-theory
- `@polyhymnia/music-theory`: pitch, interval, chord, scale and key theory. Pure TypeScript, no dependencies, no DOM, no Node APIs.
- Its `Pitch` stays structurally equal to MNX's `Pitch` (`{step, octave, alter?}`); `parsePitch` returns MNX shape (`alter` omitted when 0), spelling functions return `SpelledPitch` (`alter` always present).
- Consumers (notation packages, the app) import theory only from here; seeded randomness (`midiToPitchRng`) stays in the app.
- Simple work → write it ourselves; no runtime dependencies.

# Publishing
- Published to public npm (`publishConfig.access: public`, `files` whitelist, own `LICENSE`).
- Record releasable changes with `pnpm changeset`. Agents never run `changeset publish`, `npm publish`, or push; the user publishes.
- Before a release, `pnpm pack` and smoke-install the tarball in a scratch project.

# Tests
- Add a test only to prevent a real regression: a contract or a bug that was actually fixed. Otherwise don't.
- New behavior → at most a few tests for its distinct branches. Never one test per constant, option, or trivial mapping; never restate the implementation.
- Fixed bug → one regression test that fails without the fix. Table-driven over copy-paste; no cross-products.
- Test only through public entry points; never export internals for tests. Never weaken an assertion to go green.
- Agents: run tests with `--reporter=dot`.
