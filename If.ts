export default class If {
  static all(...expressions) {
    for (let i = 0; i < expressions.length; i++) {
      const element = expressions[i]
      if (Boolean(element)) {
        continue
      } else {
        return false
      }
    }
    return true
  }
  has(target, proprty) {
    if (proprty in target) return true
    return false
  }
}
