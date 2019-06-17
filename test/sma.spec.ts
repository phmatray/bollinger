/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { SMA } from '../src/sma';

describe('Test functions:', () => {
  let close: number[] = [];

  beforeEach(() => {
    for (let i = 0; i < 300; i++) {
      close.push(Math.floor(Math.random() * 100));
    }
  });

  afterEach(() => {
    close = [];
  });

  it('test SMA function', () => {
    let result = SMA(close, 5);

    for (let i = 0; i < 4; i++) {
      expect(result[i]).toBeNull();
    }

    for (let i = 4; i < close.length; i++) {
      expect(result[i]).toBeCloseTo((close[i] + close[i - 1] + close[i - 2] + close[i - 3] + close[i - 4]) / 5);
    }
  });
});
