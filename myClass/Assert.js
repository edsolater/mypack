function has(target, property) {
  //需要做各种防止类型报错的措施
  return property in target
}
function isarray(...targets) {
  return targets.every(target => Array.isArray(target))
}
/**
 * @example
 * all(1 < 0, typeof 3 === 'number', true) => true
 */
function all(...expressions) {
  return expressions.every(Boolean)
}
/**
 * @example
 * either(1 < 0, typeof 3 === 'string', false) => true
 */
function either(...expressions) {
  return expressions.some(Boolean)
}
/**
 * @example
 * not(1 > 0, typeof 3 === 'string', false) => true
 */
function not(...expressions) {
  return expressions.every(expression => !Boolean(expression))
}
