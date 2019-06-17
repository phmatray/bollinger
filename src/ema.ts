export function EMA(close: number[], timeperiod = 30): number[] {
  let k = 2 / (timeperiod + 1);
  let result = [close[0]];

  for (let i = 1; i < close.length; i++) {
    result.push(k * close[i] + (1 - k) * result[i - 1]);
  }

  return result;
}
