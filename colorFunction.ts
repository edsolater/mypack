/**
 * 仿照sass/less的颜色函数，以丰富JavaScript的底层库。
 */

/**
 * 工具函数——生成函数
 * 返回随机生成的颜色字符串
 * @example
 * makeRandomColor() // #123456
 * makeRandomColor() // #EEFFEE
 */
function createRandomColor() {
  const letters = '0123456789ABCDEF'
  return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)])}`
}


// 有明确目的的工具函数没必要自己写，找第三方js库就行了
function toHSL(params: string) {
  if (params.match(/#[0-9a-fA-F]{6}/)) {
  }
}

function toRGB(hexadecimal: string) {
  if (hexadecimal.match(/#[0-9a-fA-F]{6}/)) {
    const r = parseInt(hexadecimal[1] + hexadecimal[2], 16)
    const g = parseInt(hexadecimal[3] + hexadecimal[4], 16)
    const b = parseInt(hexadecimal[5] + hexadecimal[6], 16)
    return `rgb(${r},${g},${b})`
  }
}
