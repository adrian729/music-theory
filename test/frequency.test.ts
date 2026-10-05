import { expect, test } from 'vitest';
import { centsBetweenFrequencies, frequencyToMidi, midiToFrequency } from '../src/index.js';

test('frequency interpretation preserves fractional MIDI and alternate tuning', () => {
  for (const tuning of [440, 442]) {
    for (const midi of [36, 69, 69.5, 90]) expect(frequencyToMidi(midiToFrequency(midi, tuning), tuning)).toBeCloseTo(midi, 10);
  }
  expect(centsBetweenFrequencies(880, 440)).toBeCloseTo(1200);
  expect(centsBetweenFrequencies(220, 440)).toBeCloseTo(-1200);
});

test('invalid inputs and unrepresentable resulting frequencies fail explicitly', () => {
  for (const bad of [0, -1, NaN, Infinity]) {
    expect(() => frequencyToMidi(bad)).toThrow(RangeError);
    expect(() => midiToFrequency(69, bad)).toThrow(RangeError);
    expect(() => centsBetweenFrequencies(440, bad)).toThrow(RangeError);
  }
  expect(() => midiToFrequency(1e6)).toThrow(RangeError);
});
