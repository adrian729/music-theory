function positive(value: number, name: string): number {
  if (!Number.isFinite(value) || value <= 0) throw new RangeError(`${name} must be positive and finite.`);
  return value;
}

/** Fractional MIDI value; the tuning reference is the frequency of MIDI 69 (A4). */
export function frequencyToMidi(frequencyHz: number, tuningHz = 440): number {
  return 69 + 12 * (Math.log2(positive(frequencyHz, 'Frequency')) - Math.log2(positive(tuningHz, 'Tuning')));
}

export function midiToFrequency(midi: number, tuningHz = 440): number {
  if (!Number.isFinite(midi)) throw new RangeError('MIDI must be finite.');
  const frequency = positive(tuningHz, 'Tuning') * 2 ** ((midi - 69) / 12);
  return positive(frequency, 'Resulting frequency');
}

/** Signed cents: positive when frequencyHz is above referenceHz. */
export function centsBetweenFrequencies(frequencyHz: number, referenceHz: number): number {
  return 1200 * (Math.log2(positive(frequencyHz, 'Frequency')) - Math.log2(positive(referenceHz, 'Reference')));
}
