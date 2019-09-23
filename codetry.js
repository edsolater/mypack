function toRGB(param = '#f5f5f5') {
  if (param.match(/#[0-9a-fA-F]{6}/)) {
    const r = parseInt(param[1] + param[2], 16)
    const g = parseInt(param[3] + param[4], 16)
    const b = parseInt(param[5] + param[6], 16)
    return `rgb(${r},${g},${b})`
  }
}

console.log(toRGB())
