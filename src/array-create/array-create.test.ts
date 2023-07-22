import { describe, expect, it } from '@jest/globals';
import {
  arrayOfConstant,
  arrayOfMapped,
  arrayOfUndefined,
} from './array-create';

describe('array-create', () => {
  describe('arrayOfConstant()', () => {
    interface Example {
      readonly input: {
        readonly length: number;
        readonly value: string;
      };
      readonly expected: readonly string[];
    }

    const EXAMPLES: readonly Example[] = [
      {
        input: {
          length: 0,
          value: 'value',
        },
        expected: [],
      },
      {
        input: {
          length: 1,
          value: 'value',
        },
        expected: ['value'],
      },
      {
        input: {
          length: 3,
          value: 'other-value',
        },
        expected: ['other-value', 'other-value', 'other-value'],
      },
      {
        input: {
          length: -1,
          value: 'value',
        },
        expected: [],
      },
    ];

    for (const example of EXAMPLES) {
      it(JSON.stringify(example), () => {
        expect(
          arrayOfConstant(example.input.length, example.input.value)
        ).toEqual(example.expected);
      });
    }
  });

  describe('arrayOfMapped()', () => {
    interface Example {
      readonly input: {
        readonly length: number;
        readonly mapper: (index: number) => string;
      };
      readonly expected: readonly string[];
    }

    const EXAMPLES: readonly Example[] = [
      {
        input: {
          length: 0,
          mapper: (index) => `value${index + 1}`,
        },
        expected: [],
      },
      {
        input: {
          length: 1,
          mapper: (index) => `value${index + 1}`,
        },
        expected: ['value1'],
      },
      {
        input: {
          length: 3,
          mapper: (index) => `value${(index + 1) * 2}`,
        },
        expected: ['value2', 'value4', 'value6'],
      },
      {
        input: {
          length: -1,
          mapper: (index) => `value${index + 1}`,
        },
        expected: [],
      },
    ];

    for (const example of EXAMPLES) {
      it(JSON.stringify(example), () => {
        expect(
          arrayOfMapped(example.input.length, example.input.mapper)
        ).toEqual(example.expected);
      });
    }
  });

  describe('arrayOfUndefined()', () => {
    interface Example {
      readonly input: number;
      readonly expected: readonly undefined[];
    }

    const EXAMPLES: readonly Example[] = [
      {
        input: 0,
        expected: [],
      },
      {
        input: 1,
        expected: [undefined],
      },
      {
        input: 3,
        expected: [undefined, undefined, undefined],
      },
    ];

    for (const example of EXAMPLES) {
      it(JSON.stringify(example), () => {
        expect(arrayOfUndefined(example.input)).toEqual(example.expected);
      });
    }
  });
});
