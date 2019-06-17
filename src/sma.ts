type SMAResult = (number | null)[];

export function SMA(close: number[], timeperiod = 30): SMAResult {
  let result: SMAResult = [];
  let queue = [];

  for (let i = 0; i < timeperiod - 1; i++) {
    queue.push(close[i]);
    result.push(null);
  }

  for (let i = timeperiod - 1; i < close.length; i++) {
    queue.push(close[i]);
    result.push(
      queue.reduce((pre, cur): number => {
        return pre + cur;
      }) / timeperiod,
    );
    queue.shift();
  }

  return result;
}
