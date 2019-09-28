/**
 * -------------------------------------------------------------------
 * 
 * 说是tag，其实都是 (value) => boolean 形式的简单函数
 * 
 * -------------------------------------------------------------------
 */



// array 系列
function isArray(value) {
  return Array.isArray(value)
}
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
function isnotEmpty(value) {
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
