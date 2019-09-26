const namedColor_hsl = {
  // 特殊颜色
  transparent: [0, 0, 0, 0],
  // 灰色系
  white: [0, 0, 100],
  snow: [0, 100, 99],
  whitesmoke: [0, 0, 96],
  gainsboro: [0, 0, 86],
  lightgray: [0, 0, 83],
  sliver: [0, 0, 75],
  darkgray: [0, 0, 66],
  gray: [0, 0, 50],
  dimgray: [0, 0, 41],
  black: [0, 0, 0],
  //红色系
  hotpink: [330, 100, 71],
  lavenderblush: [340, 100, 97],
  palevioletred: [340, 60, 65],
  crimson: [348, 83, 47],
  pink: [350, 100, 88],
  lightpink: [351, 100, 86],
  lightcoral: [0, 79, 72],
  rosybrown: [0, 25, 65],
  indianred: [0, 53, 58],
  red: [0, 100, 50],
  brown: [0, 59, 41],
  firebrick: [0, 68, 42],
  darkred: [0, 100, 27],
  maroon: [0, 100, 25],
  mistyrose: [6, 100, 94],
  salmon: [6, 93, 71],
  tomato: [9, 100, 64],
  // 橙色系
  darksalmon: [15, 72, 70],
  orangered: [16, 100, 50],
  coral: [16, 100, 66],
  lightsalmon: [17, 100, 74],
  sienna: [19, 56, 40],
  seashell: [25, 100, 97],
  chocolate: [25, 75, 47],
  saddlebrown: [25, 76, 31],
  peachpuff: [28, 100, 86],
  sandybrown: [28, 87, 67],
  linen: [30, 67, 94],
  peru: [30, 59, 53],
  bisque: [33, 100, 88],
  darkorange: [33, 100, 50],
  antiquewhite: [34, 78, 91],
  burlywood: [34, 57, 70],
  tan: [34, 44, 69],
  navajowhite: [36, 100, 84],
  blanchedalmod: [36, 100, 90],
  papayawhip: [37, 100, 92],
  moccasin: [38, 100, 85],
  oldlace: [39, 85, 95],
  wheat: [39, 77, 83],
  orange: [39, 100, 50],
  floralwhite: [40, 100, 97],
  goldenrod: [43, 74, 49],
  darkgoldenrod: [43, 89, 38],
  //黄色系
  cornsilk: [48, 100, 93],
  gold: [51, 100, 50],
  lemonchiffon: [54, 100, 90],
  khaki: [54, 77, 75],
  palegoldenrod: [55, 67, 80],
  darkkhaki: [56, 38, 58],
  ivory: [60, 100, 97],
  lightyellow: [60, 100, 94],
  beige: [60, 56, 91],
  lightgoldenrodyellow: [60, 80, 90],
  yellow: [60, 100, 50],
  olive: [60, 100, 25],
  yellowgreen: [80, 61, 50],
  olivedrab: [80, 60, 35],
  darkolivegreen: [82, 39, 30],
  greenyellow: [84, 100, 59],
  //绿色系
  chartreuse: [90, 100, 50],
  lawngreen: [90, 100, 49],
  darkseagreen: [120, 25, 65],
  honeydew: [120, 100, 97],
  palegreen: [120, 93, 79],
  lightgreen: [120, 73, 75],
  lime: [120, 100, 50],
  limegreen: [120, 61, 50],
  forestgreen: [120, 61, 34],
  green: [120, 100, 25],
  darkgreen: [120, 100, 20],
  seagreen: [146, 50, 36],
  mediumseagreen: [147, 50, 47],
  //青色系
  mintcream: [150, 100, 98],
  springgreen: [150, 100, 50],
  mediumspringgreen: [157, 100, 49],
  aquamarine: [160, 100, 75],
  mediumaquamarine: [160, 51, 60],
  turquoise: [174, 72, 56],
  lightseagreen: [177, 70, 41],
  mediumturquoise: [178, 60, 55],
  lightcyan: [180, 100, 94],
  azure: [180, 100, 97],
  paleturquoise: [180, 65, 81],
  cyan: [180, 100, 50],
  aqua: [180, 100, 50],
  darkcyan: [180, 100, 27],
  teal: [180, 100, 25],
  darkslategray: [180, 25, 25],
  darkturquoise: [181, 100, 41],
  cadeblue: [182, 25, 50],
  powderblue: [187, 52, 80],
  lightblue: [195, 53, 79],
  deepskyblue: [195, 100, 50],
  skyblue: [197, 71, 73],
  lightskyblue: [203, 93, 75],
  steelblue: [207, 44, 49],
  aliceblue: [208, 100, 97],
  //蓝色系
  dodgerblue: [210, 100, 56],
  slategray: [210, 13, 50],
  cornflowerblue: [219, 79, 66],
  royalblue: [225, 73, 57],
  ghostwhite: [240, 3, 100],
  lavender: [240, 67, 94],
  blue: [240, 100, 50],
  middleblue: [240, 100, 40],
  darkblue: [240, 100, 27],
  midnightblue: [240, 64, 27],
  navy: [240, 100, 25],
  slateblue: [248, 53, 58],
  darkslateblue: [248, 39, 39],
  mediumslateblue: [249, 80, 67],
  mediumpurple: [260, 60, 65],
  //品色系
  rebeccapurple: [270, 50, 40],
  blueviolet: [271, 76, 53],
  indigo: [275, 100, 25],
  darkorchid: [280, 61, 50],
  darkviolet: [282, 100, 41],
  mediumorchid: [288, 59, 58],
  thistle: [300, 24, 80],
  plum: [300, 47, 75],
  violet: [300, 76, 72],
  fushia: [300, 100, 50],
  magenta: [300, 100, 50],
  darkmagenta: [300, 100, 27],
  purple: [300, 100, 25],
  orchid: [302, 59, 65],
  mediumvioletred: [322, 81, 43],
  deeppink: [328, 100, 54] // 深粉红
}
/**
 * 工具函数——生成函数
 * 返回随机生成的颜色字符串
 * @example
 * makeRandomColor() // #123456
 * makeRandomColor() // #EEFFEE
 */
function createRandomColor() {
  const letters = '0123456789ABCDEF'
  return `#${Array.from(
    { length: 6 },
    () => letters[Math.floor(Math.random() * 16)]
  )}`
}
function hasDefined(...values) {
  return values.every(value => typeof value !== undefined)
}
function hasnotDefined(...values) {
  return values.every(value => typeof value === undefined)
}
function hasValue(...values) {
  return values.every(
    value => typeof value !== undefined && typeof value !== null
  )
}
function hasnotValue(...values) {
  return values.every(
    value => typeof value === undefined || typeof value === null
  )
}
//TODO: 完善默认值机制
class Color {
  constructor(value = '') {
    if (typeof value === 'string') {
      let matchStr
      if (
        (matchStr = value.match(
          /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
        ))
      ) {
        const rgbStr = matchStr[1]
        if (rgbStr.length === 6) {
          // 例如: value = "#000fff"
          this.r = parseInt(rgbStr.slice(0, 2), 16)
          this.g = parseInt(rgbStr.slice(2, 4), 16)
          this.b = parseInt(rgbStr.slice(4, 6), 16)
        } else if (rgbStr.length === 8) {
          // 例如: value = "#000fffcc"
          this.r = parseInt(rgbStr.slice(0, 2), 16)
          this.g = parseInt(rgbStr.slice(2, 4), 16)
          this.b = parseInt(rgbStr.slice(4, 6), 16)
          this.a = parseInt(rgbStr.slice(6, 8), 16) / 256
        } else if (rgbStr.length === 3) {
          // 例如: value = "#3ef"
          const dulp = n => n + n
          this.r = parseInt(dulp(rgbStr.slice(0, 1)), 16)
          this.g = parseInt(dulp(rgbStr.slice(1, 2)), 16)
          this.b = parseInt(dulp(rgbStr.slice(2, 3)), 16)
        } else if (rgbStr.length === 4) {
          // 例如: value = "#3ef4"
          const dulp = n => n + n
          this.r = parseInt(dulp(rgbStr.slice(0, 1)), 16)
          this.g = parseInt(dulp(rgbStr.slice(1, 2)), 16)
          this.b = parseInt(dulp(rgbStr.slice(2, 3)), 16)
          this.a = parseInt(dulp(rgbStr.slice(3, 4)), 16) / 256
        }
      } else if (
        (matchStr = value.match(
          /^rgba?\((?<red>\d+), ?(?<green>\d+), ?(?<blue>\d+)(?:, ?(?<alpha>.+))?\)$/
        ))
      ) {
        const { red: r, green: g, blue: b, alpha: a } = matchStr.groups
        this.r = parseInt(r)
        this.g = parseInt(g)
        this.b = parseInt(b)
        this.a = parseFloat(a)
      } else if (
        (matchStr = value.match(
          /^hsla?\((?<hue>\d+), ?(?<saturation>\d+), ?(?<lightness>\d+)(?:, ?(?<alpha>.+))?\)$/
        ))
      ) {
        const {
          hue: h,
          saturation: s,
          lightness: l,
          alpha: a
        } = matchStr.groups
        this.h = parseInt(h)
        this.s = parseFloat(s)
        this.l = parseFloat(l)
        this.a = parseFloat(a)
      } else {
        try {
          const [h, s, l, a] = namedColor_hsl[value]
          this.h = h
          this.s = s
          this.l = l
          this.a = a
        } catch {
          throw Error(`can't understand named color: ${value}`)
        }
      }
    } else if (typeof value === 'number') {
      this.l = value
    } else if (typeof value === 'object' && value instanceof Array) {
      const [h = 0, s = 0, l = 75, a = 1] = value
      this.h = h
      this.s = s
      this.l = l
      this.a = a
    } else {
      throw Error(`can't understand this type of value: ${value}`)
    }
  }
  inferRGB([h = 0, s = 0, l = 75, a = 1]) {
    // HSL转RGB算法
    return [255, 255, 255]
  }
  inferHSL([r = 200, g = 200, b = 200, a = 1]) {
    const [max, min] = [Math.max(r, g, b), Math.min(r, g, b)]
    const heaviestColor =
      max === min ? 'gray' : max === r ? 'red' : max === g ? 'green' : 'blue'
    let h, s, l
    switch (heaviestColor) {
      // 这里阅读顺序不对，怎么破？
      case 'gray': {
        h = 0
        break
      }
      case 'red': {
        h = ((60 * (g - b)) / (max - min) + 360) % 360
        break
      }
      case 'green': {
        h = (60 * (g - b)) / (max - min) + 120
        break
      }
      case 'blue': {
        h = (60 * (g - b)) / (max - min) + 240
        break
      }
    }
    l = ((max + min) / 2 / 256) * 100
    s = (max - min) / 2 / Math.min(Math.abs(l - 0), Math.abs(l - 1)) //TODO: 这里公式的结果明显不对
    return [h, s, l, a]
  }
  toRGB() {
    if (hasnotDefined(this.r, this.g, this.b)) {
      try {
        const [r, g, b, a = 1] = this.inferRGB([this.h, this.s, this.l, this.a])
        this.r = r
        this.g = g
        this.b = b
        this.a = a
      } catch {
        throw Error('something wrong in this.toRGB()') //TOFIX: 这里的捕获似乎是没有必要的
      }
    }
    return `rgb${this.a < 1 ? 'a' : ''}(${this.r},${this.g},${this.b}${
      this.a < 1 ? `,${this.a.toFixed(2)}` : ''
    })`
  }
  toHSL() {
    if (hasnotDefined(this.h, this.s, this.l)) {
      try {
        const [h, s, l, a = 1] = this.inferHSL([this.r, this.g, this.b, this.a])
        this.h = h
        this.s = s
        this.l = l
        this.a = a
      } catch {
        throw Error('something wrong in this.toHSL()') //TOFIX: 这里的捕获似乎是没有必要的
      }
    }
    return `hsl${this.a < 1 ? 'a' : ''}(${this.h},${this.s},${this.l}${
      this.a < 1 ? `,${this.a.toFixed(2)}` : ''
    })`
  }
  toHEX() {
    function toTwoHex(num = 0) {
      const hex = num.toString(16)
      if (hex.length === 1) {
        return '0' + hex
      }
      return hex
    }
    if (hasnotDefined(this.r, this.g, this.b)) {
      try {
        const [r, g, b, a = 1] = this.inferRGB([this.h, this.s, this.l, this.a])
        this.r = r
        this.g = g
        this.b = b
        this.a = a
      } catch {
        throw Error('something wrong in this.toHEX()') //TOFIX: 这里的捕获似乎是没有必要的
      }
    }
    return `#${toTwoHex(this.r)}${toTwoHex(this.g)}${toTwoHex(this.b)}`
  }
  [Symbol.toPrimitive]() {
    return this.toHSL()
  }
}
//#region 别人写颜色转换函数们
function colorHex(colorValue) {
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 如果是rgb颜色表示
  if (/^(rgb|RGB)/.test(colorValue)) {
    var aColor = colorValue.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
    var strHex = '#'
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16)
      if (hex.length < 2) {
        hex = '0' + hex
      }
      strHex += hex
    }
    if (strHex.length !== 7) {
      strHex = colorValue
    }
    return strHex
  } else if (reg.test(colorValue)) {
    var aNum = colorValue.replace(/#/, '').split('')
    if (aNum.length === 6) {
      return colorValue
    } else if (aNum.length === 3) {
      var numHex = '#'
      for (var i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i]
      }
      return numHex
    }
  }
  return colorValue
}
colorHex('rgb(255,255,255)') // "#ffffff"
var colorRgb = function(sColor) {
  sColor = sColor.toLowerCase()
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#'
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    //处理六位的颜色值
    var sColorChange = []
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return 'RGB(' + sColorChange.join(',') + ')'
  }
  return sColor
}
colorRgb('#fff') //"RGB(255,255,255)"
/**
 * HSL颜色值转换为RGB.
 * 换算公式改编自 http://en.wikipedia.org/wiki/HSL_color_space.
 * h, s, 和 l 设定在 [0, 1] 之间
 * 返回的 r, g, 和 b 在 [0, 255]之间
 *
 * @param   Number  h       色相
 * @param   Number  s       饱和度
 * @param   Number  l       亮度
 * @return  Array           RGB色值数值
 */
function hslToRgb(h, s, l) {
  var r, g, b
  if (s == 0) {
    r = g = b = l // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s
    var p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}
/**
 * RGB 颜色值转换为 HSL.
 * 转换公式参考自 http://en.wikipedia.org/wiki/HSL_color_space.
 * r, g, 和 b 需要在 [0, 255] 范围内
 * 返回的 h, s, 和 l 在 [0, 1] 之间
 *
 * @param   Number  r       红色色值
 * @param   Number  g       绿色色值
 * @param   Number  b       蓝色色值
 * @return  Array           HSL各值数组
 */
function rgbToHsl(r, g, b) {
  ;(r /= 255), (g /= 255), (b /= 255)
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  var h,
    s,
    l = (max + min) / 2
  if (max == min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return [h, s, l]
}
//#endregion
const color = new Color('transparent')
console.log(color.toHSL())
