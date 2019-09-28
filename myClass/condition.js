/**
 *
 * 管道函数
 */
function pipe(...fns) {
  fns = fns.flat()
  if (fns.length === 0) {
    return any => any
  } else if (fns.length === 1) {
    return fns[0]
  } else {
    const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args))
    return fns.reduce(_pipe)
  }
}

//#region 判断用单体函数
// array 系列
function isArray(...targets) {
  return targets.every(target => Array.isArray(target))
}
function isFilledArray(value) {
  if (!Array.isArray(value)) return false
  if (value.length === 0) return false
  return true
}
/**
 * hhh
 */
function isEmptyArray(value) {
  if (!Array.isArray(value)) return false
  if (value.length === 0) return true
  return false
}

// 是否已定义，且有值
function isEmpty(value) {
  if (typeof value === 'undefined') return false
  if (typeof value === 'object' && Array.isArray(value) && value.length === 0) {
    // []
    return true
  } else if (typeof value === 'object' && Object.keys(value).length === 0) {
    // {}
    return true
  }
  return false
}
function isFilled(value) {
  if (typeof value === 'undefined') return false
  return !isEmpty(value)
}

// 是否未定义，
function isDefined(value) {
  return typeof value !== 'undefined'
}
function isUndefined(value) {
  return !isDefined(value)
}

// 数字性质
function isPositiveValue(value) {
  if (typeof value !== 'number') return false
  return value > 0
}
function isNegativeValue(value) {
  if (typeof value !== 'number') return false
  return value < 0
}
function isZero(value) {
  if (typeof value !== 'number') return false
  return value === 0
}
function isInteger(value) {
  if (typeof value !== 'number') return false
  return Number.isInteger(value)
}

//#endregion
//#region 判断辅助函数
/**
 * @example
 * all(1 < 0, typeof 3 === 'number', true, (v)=>Boolean(v) ) => true
 */
function all(...expressionsWidthJudgeFuncs) {
  const judgeFunc = pipe(expressionsWidthJudgeFuncs.pop())
  const expressions = expressionsWidthJudgeFuncs
  return expressions.every(judgeFunc)
}
/**
 * @example
 * any(1 < 0, typeof 3 === 'string',(v)=>Boolean(v)) => true
 */
function any(...expressionsWidthJudgeFuncs) {
  const judgeFunc = pipe(expressionsWidthJudgeFuncs.pop())
  const expressions = expressionsWidthJudgeFuncs
  return expressions.some(judgeFunc)
}
function trusy(...expressions) {
  return all(...expressions, v => Boolean(v))
}
function falsy(...expressions) {
  return all(...expressions, v => !Boolean(v))
}
function has(target, property) {
  if (typeof target !== 'object') return false
  if (Array.isArray(target)) {
    return target.includes(property)
  } else {
    return property in target
  }
}
//#endregion

function stringify(value) {
  if (typeof value === 'string') {
    return value
  } else if (typeof value === 'undefined' || typeof value === null) {
    return ''
  } else {
    return JSON.stringify(value)
  }
}
function foo() {
  return console.log('hello')
}

console.log(
  [
    () => true,
    () => 1 > 0,
    () => (foo(), false),
    () => (foo(), false),
    () => (foo(), false),
    () => (foo(), false)
  ].exery(v => Boolean(v())),
  'hello'
)
console.log(stringify(undefined))
console.log([2, 3].splice(-1, 1))
