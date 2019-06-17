/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { sum } from '../src/sum';

describe('sum', () => {
  it('should add numbers', () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);

    expect(result).toBe(3);
  });
});
