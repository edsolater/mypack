/**
 * 堆栈，意义在于更具想象地组织代码，限制Array过度灵活性，只把Array理解为数据的集合
 */
class Stack {
  constructor(...items) {
    this.reverse = false
    this.stack = [...items]
  }

  push(...items) {
    return this.reverse
      ? this.stack.unshift(...items)
      : this.stack.push(...items)
  }
  pop() {
    return this.reverse ? this.stack.shift() : this.stack.pop()
  }
}
