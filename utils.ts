import { baseFunc } from './lowerBaseFunctions';
/**
 * 工具函数——生成函数
 * 返回随机生成的颜色字符串
 * @example
 * makeRandomColor() // #123456
 * makeRandomColor() // #EEFFEE
 */
function makeRandomColor() {
  const letters = '0123456789ABCDEF';
  return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)])}`;
}

/**
 *
 * 简单的触发函数行为，给行为函数名增加业务代码的可读性
 * @param fn 需触发的函数
 * @param args 参数们
 */
function invoke<T>(fn: (...args: any[]) => T, ...args: any[]) {
  if (typeof fn !== 'function') throw Error(`can't invoke ${fn}`);
  return fn(...args);
}

/**
 * 生成函数
 * @param count 生成的Iterator的可迭代数
 * @param mapFunc 初始化的map函数
 * @example 生成一组扑克牌
 *    const card = [...generate(13, *(i)=>{
 *     const p = i + 1
 *      yield ['♠',p]
 *      yield ['♣',p]
 *      yield ['♥',p]
 *      yield ['♦',p]
 *    }]
 */
function* generate(count: number, mapFunc = baseFunc) {
  for (let i = 0; i < count; i++) {
    if (mapFunc.constructor.name === 'GenertorFunction') {
      yield* (mapFunc as GeneratorFunction)(i, count);
    } else {
      yield mapFunc(i, count);
    }
  }
}
