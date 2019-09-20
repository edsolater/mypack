/**
 * 仿照sass/less的颜色函数，以丰富JavaScript的底层库。
 */

function toHSL(param: string) {
  if (param.match(/#[0-9a-fA-F]{6}/)) {
    
  }
}

function toRGB(param: string) {
  if (param.match(/#[0-9a-fA-F]{6}/)) {
    
  }
}


/**
 * 工具函数——生成函数
 * 返回随机生成的颜色字符串
 * @example
 * makeRandomColor() // #123456
 * makeRandomColor() // #EEFFEE
 */
function makeRandomColor() {
  const letters = '0123456789ABCDEF';
  return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)])}`;
}