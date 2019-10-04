/**
 * 用于在编写函数时充当原封不动的函数
 * @param i 第一个函数参数
 * @param rest 除了第一个的函数参数
 * @returns 直接返回第一参数
 */
export function baseFunc(...params) {
  return params.unshift()
}

/**
 *
 * 简单的触发函数行为，给行为函数名增加业务代码的可读性
 * @param func 需触发的函数
 * @param funcArgs 参数们
 */
export function invoke(func, ...funcArgs) {
  if (typeof func !== 'function') return func
  return func(...funcArgs)
}

