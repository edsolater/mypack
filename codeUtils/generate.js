import { baseFunc } from './elementry'

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
export function* generate(count, mapFunc = baseFunc) {
  //TODO: 写个MapFunc的类型要能自动返回没给定的参数的返回值
  for (let i = 0; i < count; i++) {
    if (mapFunc.constructor.name === 'GenertorFunction') {
      yield* mapFunc(i, count)
    } else {
      yield mapFunc(i, count)
    }
  }
}

export function range(count, mapFunc = baseFunc) {
  return [...generate(count, mapFunc)]
}
