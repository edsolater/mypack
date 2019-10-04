import pipe from './pipe'
/**
 * @example
 * all(1 < 0, typeof 3 === 'number', true, (v)=>Boolean(v) ) => true
 */
function all(...expressionsWidthJudgeFuncs) {
  const judgeFunc = pipe(expressionsWidthJudgeFuncs.pop())
  const values = expressionsWidthJudgeFuncs
  return values.every(value => {
    if (typeof value === 'function') {
      return judgeFunc(value(judgeFunc))
    } else {
      return judgeFunc(value)
    }
  })
}
/**
 * @example
 * any(1 < 0, typeof 3 === 'string',(v)=>Boolean(v)) => true
 */
function any(...expressionsWidthJudgeFuncs) {
  const judgeFunc = pipe(expressionsWidthJudgeFuncs.pop())
  const values = expressionsWidthJudgeFuncs
  return values.some(value => {
    if (typeof value === 'function') {
      return judgeFunc(value(judgeFunc))
    } else {
      return judgeFunc(value)
    }
  })
}
/**
 * @example 懒加载写法（doSomething被调用了2次）
 *   trusy(
 *     () => true,
 *     () => doSomething(),
 *     () => 1 > 0,
 *     () => (doSomething(), false),
 *     () => (doSomething(), false),
 *     () => (doSomething(), false)
 *   )
 */
function allTrue(...expressions) {
  return all(...expressions, v => Boolean(v))
}
function allFalse(...expressions) {
  return all(...expressions, v => !Boolean(v))
}
function foo() {
  console.log('hello')
  return true
}

console.log(
  allTrue(
    () => true,
    () => foo(),
    () => 1 > 0,
    () => (foo(), false),
    () => (foo(), false),
    () => (foo(), false)
  )
)
console.log(stringify(undefined))
console.log([2, 3].splice(-1, 1))
