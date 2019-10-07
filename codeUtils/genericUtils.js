/**
 * -----------------------------
 * 返回用在高阶函数中或pipe函数中的 “小函数”的函数
 * ------------------------------
 */
function pick(propertyName) {
  return target => target[propertyName]
}
