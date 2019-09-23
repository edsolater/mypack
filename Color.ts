/**
 * 仿照sass/less的颜色函数，以丰富JavaScript的底层库。
 */

type colorValue = string | number | [number, number, number, number?]
type colorMode = 'RGB' | 'HSL' | 'HEX' | 'RGBA' | 'HSLA' | 'HEXA' 
export default class Color {
  mode:colorMode
  r: number
  g: number
  b: number
  a: number
  /**
   * 工具函数——生成函数
   * 返回随机生成的颜色字符串
   * @example
   * makeRandomColor() // #123456
   * makeRandomColor() // #EEFFEE
   */
  static createRandomColor() {
    const letters = '0123456789ABCDEF'
    return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)])}`
  }
  constructor(value) {
    value = this.formatColorValue(value)
    const mode = this.getColorMode(value)
    this.mode = mode
    const { r, g, b, a } = this.parseColorValue(value, mode)
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }
  formatColorValue(value: colorValue): colorValue {}
  getColorMode(value: colorValue):colorMode {
    if (typeof value === 'string') {
      if (value.match(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/)) {
        return 'HEX'
      } else if (value.match(/^(?:rgb|rgba)\(\d+, ?\d+, ?\d(?:, ?\d+)?\)$/)) {
        return 'RGB'
      }
    }
  }
  parseColorValue(value: colorValue, mode: colorMode) {
    switch (mode) {
      case 'HSL': {
        // 分析 HSL 格式的色值
      }
      case 'RGB': {
        // 分析 RGB 格式的色值
      }
      case 'HEX': {
        // 分析 HEX 格式的色值
      }
    }
    return {
      r: 225,
      g: 225,
      b: 225,
      a: 0.6
    }
  }
  fromHSL(value: string) {}
  fromRGB(value: string) {}
  fromHEX(value: string) {}

  toRGB(hexadecimal: string) {
    if (hexadecimal.match(/#[0-9a-fA-F]{6}/)) {
      const r = parseInt(hexadecimal[1] + hexadecimal[2], 16)
      const g = parseInt(hexadecimal[3] + hexadecimal[4], 16)
      const b = parseInt(hexadecimal[5] + hexadecimal[6], 16)
      return `rgb(${r},${g},${b})`
    }
  }

  // 有明确目的的工具函数没必要自己写，找第三方js库就行了
  toHSL(params: string) {
    if (params.match(/#[0-9a-fA-F]{6}/)) {
    }
  }
  toHEX(rgb: [number, number, number]) {
    const [r, g, b] = rgb
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
  }

  [Symbol.toPrimitive]() {
    return this.toHEX([this.r, this.g, this.b])
  }
}
