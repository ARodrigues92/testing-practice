import caesar from './caesar';

describe('caesar', () => {
  it('standart shift', () => {
    expect(caesar('something', 1)).toBe('tpnfuijoh');
  });
  it('negative shift', () => {
    expect(caesar('something', -1)).toBe('rnldsghmf');
  });
  it('maintains original upper and lower cases', () => {
    expect(caesar('Something', 1)).toBe('Tpnfuijoh');
  });
  it('works with phrases', () => {
    expect(caesar('Say something', 1)).toBe('Tbz tpnfuijoh');
  });
  it('maintains punctuation', () => {
    expect(caesar('Say, something!', 1)).toBe('Tbz, tpnfuijoh!');
  });
  it('wraps around alphabet', () => {
    expect(caesar('z', 1)).toBe('a');
  });
  it('works with shifts larger than alphabet size', () => {
    expect(caesar('Say, something!', 27)).toBe('Tbz, tpnfuijoh!');
  });
  it('works with negative shifts larger than alphabet size', () => {
    expect(caesar('Say, something!', -27)).toBe('Rzx, rnldsghmf!');
  });
});
