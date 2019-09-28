function has(target, property) {
  if (typeof target !== 'object') return false
  if (Array.isArray(target)) {
    return target.includes(property)
  } else {
    return property in target
  }
}
