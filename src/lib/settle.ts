export function createSettleDetector(quietFrames = 10, epsilon = 0.00005) {
  let last = Number.NaN;
  let count = 0;
  return (p: number): boolean => {
    if (Math.abs(p - last) < epsilon) count++;
    else count = 0;
    last = p;
    return count === quietFrames;
  };
}
