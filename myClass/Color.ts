/**
 * 仿照sass/less的颜色函数，以丰富JavaScript的底层库。
 * 返回一个色块对象
 */
type colorValue = string | number | [number, number, number, number?];
type colorMode = 'RGB' | 'HSL' | 'HEX' | 'RGBA' | 'HSLA' | 'HEXA';

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
      this.a < 1 ? `,${this.a.toFixed(3)}` : ''
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
