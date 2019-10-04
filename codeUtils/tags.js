/**
 * -------------------------------------------------------------------
 *
 * 说是tag，其实都是 (value) => boolean 形式的简单函数，用于需要返回布尔值的回调
 *
 * -------------------------------------------------------------------
 */

// array 系列
function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0
}
function isUnaryArray(value) {
  return Array.isArray(value) && value.length === 1
}
function isMultiItemArray(value) {
  return Array.isArray(value) && value.length > 1
}

// 是否已定义，且有值
function isEmpty(value) {
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    // {} 或 []
    return true
  }
  if (value === 0) {
    return false
  }
  return Boolean(value)
}
function isnotEmpty(value) {
  if (typeof value === 'undefined') return false
  return !isEmpty(value)
}

// 不是undefined或null
function isNill(value) {
  return typeof value === 'undefined' || value === null
}
function isnotNill(value) {
  return !isNill(value)
}

// 是否未定义，
function isDefined(value) {
  return typeof value !== 'undefined'
}
function isUndefined(value) {
  return !isDefined(value)
}

// 数字x相关性质
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
