/**
 * 工具函数——生成函数
 * 返回随机生成的颜色字符串
 * @example
 * getRandomColor() // #123456
 * getRandomColor() // #EEFFEE
 */
function getRandomColor() {
  const letters = '0123456789ABCDEF'
  return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)])}`
}

/**
 *
 * 简单的触发函数行为，给行为函数名增加业务代码的可读性
 * @param fn 需触发的函数
 * @param args 参数们
 */
function invoke<T>(fn: (...args: any[]) => T, ...args: any[]) {
  if (typeof fn !== 'function') throw Error(`can't invoke ${fn}`)
  return fn(...args)
}
