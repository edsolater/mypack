export function doNothing<T>(i: T, ...rest: any) {
  return i;
}

/**
 *
 * 简单的触发函数行为，给行为函数名增加业务代码的可读性
 * @param fn 需触发的函数
 * @param args 参数们
 */
function invoke<T>(fn: (...args: any[]) => T, ...args: any[]) {
  if (typeof fn !== 'function') return fn;
  return fn(...args);
}
