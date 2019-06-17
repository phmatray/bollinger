/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { EMA } from '../src/ema';

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

  it('test EMA function by 12', () => {
    let result = EMA(close, 12);
    expect(result[0]).toBeCloseTo(close[0]);
    let k = 2 / (12 + 1);
    for (let i = 1; i < close.length; i++) {
      expect(result[i]).toBeCloseTo(k * close[i] + (1 - k) * result[i - 1]);
    }
  });

  it('test EMA function by 26', () => {
    let result = EMA(close, 26);
    expect(result[0]).toBeCloseTo(close[0]);
    let k = 2 / (26 + 1);
    for (let i = 1; i < close.length; i++) {
      expect(result[i]).toBeCloseTo(k * close[i] + (1 - k) * result[i - 1]);
    }
  });
});
