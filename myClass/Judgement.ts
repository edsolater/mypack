import * as React from 'react'
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
  randerIf(componentObj:JSX.Element, expression){
    return expression && componentObj
  }
  is(target, type: string) {
    return typeof target === type
  }
}
