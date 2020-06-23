import calculator from './calculator';

describe('calculator', () => {
  describe('adding', () => {
    it('add 2 whole numbers', () => {
      expect(calculator.add(3, 1)).toBe(4);
    });
    it('works with negative numbers', () => {
      expect(calculator.add(1, -2)).toBe(-1);
    });
    it('works with decimals', () => {
      expect(calculator.add(1.3, 2.5)).toBe(3.8);
    });
  });

  describe('subtract', () => {
    it('subtract 2 whole numbers', () => {
      expect(calculator.subtract(3, 1)).toBe(2);
    });
    it('works with negative numbers', () => {
      expect(calculator.subtract(-1, -2)).toBe(1);
    });
    it('works with decimals', () => {
      expect(calculator.subtract(2.5, 1.3)).toBe(1.2);
    });
  });

  describe('divide', () => {
    it('divide 2 whole numbers', () => {
      expect(calculator.divide(4, 2)).toBe(2);
    });
    it('works with negative numbers', () => {
      expect(calculator.divide(-4, -2)).toBe(2);
    });
    it('works with decimals', () => {
      expect(calculator.divide(2.5, 2)).toBe(1.25);
    });
    it('divide by 0', () => {
      expect(calculator.divide(2, 0)).toBe("Can't divide by 0");
    });
  });

  describe('multiply', () => {
    it('multiply 2 whole numbers', () => {
      expect(calculator.multiply(3, 2)).toBe(6);
    });
    it('works with negative numbers', () => {
      expect(calculator.multiply(-1, -2)).toBe(2);
    });
    it('works with decimals', () => {
      expect(calculator.multiply(2.5, 2)).toBe(5);
    });
  });
});
