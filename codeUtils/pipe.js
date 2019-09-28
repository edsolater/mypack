/**
 *
 * 管道函数
 */
export default function pipe(...fns) {
  fns = fns.flat();
  if (fns.length === 0) {
    return any => any;
  }
  else if (fns.length === 1) {
    return fns[0];
  }
  else {
    return fns.reduce((fn1, fn2) => (...args) => fn2(fn1(...args)));
  }
}
