# @polyhymnia/music-theory

Pitch, interval, chord, scale and key theory. Pure TypeScript, no dependencies.

```sh
pnpm install
pnpm build
pnpm typecheck
pnpm test
```

Releases are versioned with changesets and published to npm as `@polyhymnia/music-theory`.

MIT licensed.

## Frequency interpretation

`frequencyToMidi(hz, tuningHz = 440)` preserves fractional MIDI values; `midiToFrequency(midi, tuningHz = 440)` performs the inverse. The reference is MIDI 69 / A4. `centsBetweenFrequencies(hz, referenceHz)` is signed, positive above the reference. Inputs must be finite; frequencies and tuning must be positive. Unrepresentable resulting frequencies throw. These helpers have no browser or audio dependencies.
