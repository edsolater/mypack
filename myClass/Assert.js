function has(target, property) {
  //需要做各种防止类型报错的措施
  return property in target
}
function isArray(...targets) {
  return targets.every(target => Array.isArray(target))
}
function isEmpty(value) {
  if (typeof value === 'undefined' || value === null) {
    return true
  } else if (
    typeof value === 'object' &&
    Array.isArray(value) &&
    value.length === 0
  ) {
    // []
    return true
  } else if (typeof value === 'object' && Object.keys(value).length === 0) {
    // {}
    return true
  }
  return false
}
/**
 * @example
 * all(1 < 0, typeof 3 === 'number', true) => true
 */
function every(...expressions) {
  return expressions.every(Boolean)
}
/**
 * @example
 * either(1 < 0, typeof 3 === 'string', false) => true
 */
function some(...expressions) {
  return expressions.some(Boolean)
}
/**
 * @example
 * not(1 > 0, typeof 3 === 'string', false) => true
 */
function no(...expressions) {
  return expressions.every(expression => !Boolean(expression))
}

function stringify(value) {
  if (typeof value === 'string') {
    return value
  } else if (empty(value)) {
    return ''
  } else {
    return JSON.stringify(value)
  }
}