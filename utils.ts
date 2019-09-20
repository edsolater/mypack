import { baseFunc } from './lowerBaseFunctions';

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
