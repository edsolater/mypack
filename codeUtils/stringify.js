function stringify(value) {
  if (typeof value === 'string') {
    return value
  } else if (typeof value === 'undefined' || typeof value === null) {
    return ''
  } else {
    return JSON.stringify(value)
  }
}
