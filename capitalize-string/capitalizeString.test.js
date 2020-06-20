import capitalizeString from './capitalizeString';

describe('capitalizeString', () => {
  it('checks for empty string', () => {
    expect(capitalizeString('')).toBe('No string provided');
  });

  it('checks if the first character is a letter', () => {
    expect(capitalizeString('2something')).toBe(
      'The first character is not a letter'
    );
  });

  it('capitalizes the first character', () => {
    expect(capitalizeString('something')).toBe('Something');
  });
});
