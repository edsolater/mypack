/**
 * 仿照sass/less的颜色函数，以丰富JavaScript的底层库。
 * 返回一个色块对象
 */
type colorValue = string | number | [number, number, number, number?];
type colorMode = 'RGB' | 'HSL' | 'HEX' | 'RGBA' | 'HSLA' | 'HEXA';

const namedColor_hsl = {
  // 灰色系
  white: [0, 0, 100], // 白
  snow: [0, 100, 99], // 雪
  whitesmoke: [0, 0, 96], // 白烟
  gainsboro: [0, 0, 86], // 亮灰（赶死部落）
  lightgray: [0, 0, 83], // 浅灰
  sliver: [0, 0, 75], // 银
  darkgray: [0, 0, 66], // 深灰色
  gray: [0, 0, 50], // 灰
  dimgray: [0, 0, 41], // 暗灰色
  black: [0, 0, 0], //黑

  //红色系
  hotpink: [330, 100, 71], // 热情的粉红
  lavenderblush: [340, 100, 97], // 薰衣草红
  palevioletred: [340, 60, 65], // 苍紫罗兰红
  crimson: [348, 83, 47], // 绯红
  pink: [350, 100, 88], // 粉红色
  lightpink: [351, 100, 86], // 浅粉红
  lightcoral: [0, 79, 72], // 浅珊瑚色
  rosybrown: [0, 25, 65], // 玫瑰棕
  indianred: [0, 53, 58], // 印第安红
  red: [0, 100, 50], // 红色
  brown: [0, 59, 41], // 棕色
  firebrick: [0, 68, 42], // 火砖
  darkred: [0, 100, 27], // 深红色
  maroon: [0, 100, 25], // 褐红色/栗色
  mistyrose: [6, 100, 94], // 迷雾玫瑰
  salmon: [6, 93, 71], // 鲑鱼肉
  tomato: [9, 100, 64], // 西红柿

  // 橙色系
  darksalmon: [15, 72, 70], // 深色鲑鱼肉
  orangered: [16, 100, 50], // 橙红色
  coral: [16, 100, 66], // 珊瑚色
  lightsalmon: [17, 100, 74], // 浅色鲑鱼肉
  sienna: [19, 56, 40], // 赭
  seashell: [25, 100, 97], // 沙滩贝壳
  chocolate: [25, 75, 47], // 巧克力
  saddlebrown: [25, 76, 31], // 重褐色
  peachpuff: [28, 100, 86], // 桃色
  sandybrown: [28, 87, 67], // 沙棕色
  linen: [30, 67, 94], // 亚麻色
  peru: [30, 59, 53], // 秘鲁色
  bisque: [33, 100, 88], // 浓汤
  darkorange: [33, 100, 50], // 深橘红
  antiquewhite: [34, 78, 91], // 古典白
  burlywood: [34, 57, 70], // 实木
  tan: [34, 44, 69], // 皮革原色（棕褐色）
  navajowhite: [36, 100, 84], // 那瓦白（印第安黄）
  blanchedalmod: [36, 100, 90], // 发白的杏仁
  papayawhip: [37, 100, 92], // 番木
  moccasin: [38, 100, 85], // 鹿皮鞋
  oldlace: [39, 85, 95], // 旧白蕾丝花边
  wheat: [39, 77, 83], // 小麦色
  orange: [39, 100, 50], // 橙色
  floralwhite: [40, 100, 97], // 白色鲜花
  goldenrod: [43, 74, 49], // 秋麒麟
  darkgoldenrod: [43, 89, 38], // 深秋麒麟

  //黄色系
  cornsilk: [48, 100, 93], // 玉米丝
  gold: [51, 100, 50], //金
  lemonchiffon: [54, 100, 90], // 柠檬雪纺衫
  khaki: [54, 77, 75], // 卡其色
  palegoldenrod: [55, 67, 80], // 苍秋麒麟
  darkkhaki: [56, 38, 58], // 深卡其色
  ivory: [60, 100, 97], // 象牙白/乳白
  lightyellow: [60, 100, 94], // 浅黄色
  beige: [60, 56, 91], // 米黄色
  lightgoldenrodyellow: [60, 80, 90], // 浅秋麒麟黄
  yellow: [60, 100, 50], // 黄色
  olive: [60, 100, 25], // 橄榄
  yellowgreen: [80, 61, 50], // 黄绿色
  olivedrab: [80, 60, 35], // 橄榄褐色
  darkolivegreen: [82, 39, 30], // 深橄榄绿
  greenyellow: [84, 100, 59], // 绿黄色

  //绿色系
  chartreuse: [90, 100, 50], // 黄绿色
  lawngreen: [90, 100, 49], // 草坪绿
  darkseagreen: [120, 25, 65], // 深海洋绿
  honeydew: [120, 100, 97], // 白瓜
  palegreen: [120, 93, 79], // 苍绿色
  lightgreen: [120, 73, 75], // 浅绿色
  lime: [120, 100, 50], // 青柠色
  limegreen: [120, 61, 50], // 青柠绿
  forestgreen: [120, 61, 34], // 丛林绿
  green: [120, 100, 25], // 绿色
  darkgreen: [120, 100, 20], // 深绿色
  seagreen: [146, 50, 36], // 草绿色
  mediumseagreen: [147, 50, 47], // 间海洋绿

  //青色系
  mintcream: [150, 100, 98], // 薄荷奶油
  springgreen: [150, 100, 50], // 春绿
  mediumspringgreen: [157, 100, 49], // 间春绿
  aquamarine: [160, 100, 75], // 海蓝宝石/碧绿
  mediumaquamarine: [160, 51, 60], // 间碧绿
  turquoise: [174, 72, 56], // 绿松石
  lightseagreen: [177, 70, 41], // 浅海洋绿
  mediumturquoise: [178, 60, 55], // 间绿松石
  lightcyan: [180, 100, 94], // 淡青色
  azure: [180, 100, 97], // 天蓝色
  paleturquoise: [180, 65, 81], // 苍绿松石
  cyan: [180, 100, 50], // 青色（水色）
  aqua: [180, 100, 50], // 水色（青色）
  darkcyan: [180, 100, 27], // 深青色
  teal: [180, 100, 25], // 水鸭
  darkslategray: [180, 25, 25], // 深石板灰
  darkturquoise: [181, 100, 41], // 深绿松石
  cadeblue: [182, 25, 50], // 军蓝色
  powderblue: [187, 52, 80], // 粉蓝色
  lightblue: [195, 53, 79], // 淡蓝色
  deepskyblue: [195, 100, 50], // 深色天空蓝
  skyblue: [197, 71, 73], // 天空蓝
  lightskyblue: [203, 93, 75], // 浅色天空蓝
  steelblue: [207, 44, 49], // 钢蓝色
  aliceblue: [208, 100, 97], // 爱丽丝蓝

  //蓝色系
  dodgerblue: [210, 100, 56], // 闪蓝色
  slategray: [210, 13, 50], // 石板灰
  cornflowerblue: [219, 79, 66], // 矢车菊
  royalblue: [225, 73, 57], // 皇家蓝
  ghostwhite: [240, 3, 100], // 幽灵白
  lavender: [240, 67, 94], // 薰衣草
  blue: [240, 100, 50], // 蓝色
  middleblue: [240, 100, 40], // 间蓝色
  darkblue: [240, 100, 27], // 深蓝色
  midnightblue: [240, 64, 27], // 午夜蓝
  navy: [240, 100, 25], // 藏青色
  slateblue: [248, 53, 58], // 板岩蓝
  darkslateblue: [248, 39, 39], // 深板岩蓝
  mediumslateblue: [249, 80, 67], // 间板岩蓝
  mediumpurple: [260, 60, 65], // 间紫色

  //品色系
  rebeccapurple: [270, 50, 40], // 基佬紫
  blueviolet: [271, 76, 53], // 蓝紫罗兰
  indigo: [275, 100, 25], // 靛蓝色
  darkorchid: [280, 61, 50], // 深兰花
  darkviolet: [282, 100, 41], // 深紫罗兰
  mediumorchid: [288, 59, 58], // 间兰花色
  thistle: [300, 24, 80], // 蓟花
  plum: [300, 47, 75], // 梅花色
  violet: [300, 76, 72], // 紫罗兰
  fushia: [300, 100, 50], // 桃红色/玫红色（品红色/洋红色）
  magenta: [300, 100, 50], // 品红色/洋红色（桃红色/玫红色）
  darkmagenta: [300, 100, 27], // 深洋红色
  purple: [300, 100, 25], // 紫色
  orchid: [302, 59, 65], // 兰花色
  mediumvioletred: [322, 81, 43], // 间紫罗兰红
  deeppink: [328, 100, 54] // 深粉红
} as const

export default class Color {
  mode: colorMode;
  r: number;
  g: number;
  b: number;
  a: number;
  /**
   * 工具函数——生成函数
   * 返回随机生成的颜色字符串
   * @example
   * makeRandomColor() // #123456
   * makeRandomColor() // #EEFFEE
   */
  static createRandomColor() {
    const letters = '0123456789ABCDEF';
    return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)])}`;
  }
  constructor(value: colorValue) {
    value = this.formatColorValue(value); //规整传来的字符串
    const { r, g, b, a } = this.parseColorValue(value) || {};
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  formatColorValue(value: colorValue): colorValue {
    //TOFIX 暂时什么都不做
    return value;
  }
  parseColorValue(value: colorValue) {
    return this.fromHEX(value) || this.fromRGB(value);
  }
  fromHSL(value: colorValue) {}
  fromRGB(value: colorValue) {
    return null;
  }
  fromHEX(value: colorValue) {
    if (typeof value === 'string') {
      let matchStr;
      if (
        (matchStr = value.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/))
      ) {
        const rgbStr = matchStr[1];
        if (rgbStr.length === 6) {
          // 例如: value = "#000fff"
          return {
            r: parseInt(rgbStr.slice(0, 2), 16),
            g: parseInt(rgbStr.slice(2, 4), 16),
            b: parseInt(rgbStr.slice(4, 6), 16)
          };
        } else if (rgbStr.length === 3) {
          // 例如: value = "#3ef"
          const dulp = n => n + n;
          return {
            r: parseInt(dulp(rgbStr.slice(0, 1)), 16),
            g: parseInt(dulp(rgbStr.slice(1, 2)), 16),
            b: parseInt(dulp(rgbStr.slice(2, 3)), 16)
          };
        } else if (rgbStr.length === 8) {
          // 例如: value = "#000fffcc"
          return {
            r: parseInt(rgbStr.slice(0, 2), 16),
            g: parseInt(rgbStr.slice(2, 4), 16),
            b: parseInt(rgbStr.slice(4, 6), 16),
            a: parseInt(rgbStr.slice(6, 8), 16) / 265
          };
        } else if (rgbStr.length === 4) {
          // 例如: value = "#3ef4"
          const dulp = n => n + n;
          return {
            r: parseInt(dulp(rgbStr.slice(0, 1)), 16),
            g: parseInt(dulp(rgbStr.slice(1, 2)), 16),
            b: parseInt(dulp(rgbStr.slice(2, 3)), 16),
            a: parseInt(dulp(rgbStr.slice(3, 4)), 16) / 265
          };
        }
      }
    }
    return undefined;
  }

  toRGB() {
    return `rgb${this.a < 1 ? 'a' : ''}(${this.r},${this.g},${this.b}${
      this.a < 1 ? `,${this.a.toFixed(2)}` : ''
    })`;
  }

  // 有明确目的的工具函数没必要自己写，找第三方js库就行了
  toHSL(params: string) {
    if (params.match(/#[0-9a-fA-F]{6}/)) {
      
    }
  }
  toHEX() {
    function toTwoHex(num = 0) {
      const hex = num.toString(16);
      if (hex.length === 1) {
        return '0' + hex;
      }
      return hex;
    }
    return `#${toTwoHex(this.r)}${toTwoHex(this.g)}${toTwoHex(this.b)}`;
  }
  [Symbol.toPrimitive]() {
    return this.toRGB();
  }
}

//#region 别人写颜色转换函数们
function colorHex(colorValue) {
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是rgb颜色表示
  if (/^(rgb|RGB)/.test(colorValue)) {
    var aColor = colorValue.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      if (hex.length < 2) {
        hex = '0' + hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = colorValue;
    }
    return strHex;
  } else if (reg.test(colorValue)) {
    var aNum = colorValue.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return colorValue;
    } else if (aNum.length === 3) {
      var numHex = '#';
      for (var i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  }
  return colorValue;
}
colorHex('rgb(255,255,255)'); // "#ffffff"

var colorRgb = function(sColor) {
  sColor = sColor.toLowerCase();
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }
    return 'RGB(' + sColorChange.join(',') + ')';
  }
  return sColor;
};
colorRgb('#fff'); //"RGB(255,255,255)"

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
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
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
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}
//#endregion
