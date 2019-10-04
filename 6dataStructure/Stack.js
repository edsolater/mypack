/**
 * 堆栈数据结构，意义在于更具想象地组织代码，限制Array过度灵活性，只把Array理解为数据的集合
 */
class Stack {
  constructor(...items) {
    this.collection = [...items]
  }

  push(...items) {
    return this.collection.push(...items)
  }
  /**
   * 查看即将出栈的元素的值
   */
  get peek() {
    return this.collection[this.collection.length - 1]
  }
  pop() {
    return this.collection.pop()
  }
  clear() {
    this.collection = []
  }
  get isEmpty() {
    return this.collection.length === 0
  }
  get size() {
    return this.collection.length
  }
}
