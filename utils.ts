/**
 * 分类：随机生成函数
 * 调用返回颜色字符串
 * @example
 * getRandomColor() // #123456
 * getRandomColor() // #EEFFEE
 */
function getRandomColor() {
  const letters = '0123456789ABCDEF'
  return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)])}`
}
