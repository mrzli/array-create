import { describe, expect, it } from '@jest/globals';
import { range } from './range';

describe('range', () => {
  describe('range()', () => {
    it("without 'step'", () => {
      const actual = range(0, 5);
      const expected = [0, 1, 2, 3, 4];
      expect(actual).toEqual(expected);
    });

    it("with 'step'", () => {
      const actual = range(1, 6, 2);
      const expected = [1, 3, 5];
      expect(actual).toEqual(expected);
    });

    it('with negative step', () => {
      const actual = range(5, 0, -1);
      const expected = [5, 4, 3, 2, 1];
      expect(actual).toEqual(expected);
    });
  });
});
