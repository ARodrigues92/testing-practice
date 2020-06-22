import reverseString from './reverseString';

describe('reverseString', () => {
  it('checks for empty string', () => {
    expect(reverseString('')).toBe('No string provided');
  });

  it('reverse the string', () => {
    expect(reverseString('somEthing!0')).toBe('0!gnihtEmos');
  });
});
