class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor() {
    // 这是HEAD指针
    this.head = null
    // 这是TAIL指针
    this.tail = null
    // 长度非必要
    this.length = 0
  }

  push(data) {
    // 创建一个新节点
    const node = new Node(data)
    // 检查头部是否为空
    if (this.head === null) {
      this.head = node
      this.tail = node
    }
    this.tail.next = node
    this.tail = node
    this.length++
  }
  pop() {
    // 先检查链表是否为空
    if (this.isEmpty()) {
      return null
    }
    // 如果长度为1
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length--
      return this.tail
    }
    let node = this.tail
    let currentNode = this.head
    let penultimate
    while (currentNode) {
      if (currentNode.next === this.tail) {
        penultimate = currentNode
        break
      }
      currentNode = currentNode.next
    }
    penultimate.next = null
    this.tail = penultimate
    this.length--
    return node
  }
  get(index) {
    // 处理边界条件
    if (index === 0) {
      return this.head
    }
    if (index < 0 || index > this.length) {
      return null
    }
    let currentNode = this.head
    let i = 0
    while (i < index) {
      i++
      currentNode = currentNode.next
    }
    return currentNode
  }
  delete(index) {
    let currentNode = this.head
    if (index === 0) {
      let deletedNode
      currentNode.next = this.head
      deletedNode = currentNode
      this.length--
      return deletedNode
    }
    if (index < 0 || index > this.length) {
      return null
    }
    let i = 0
    let previous
    while (i < index) {
      i++
      previous = currentNode
      currentNode = currentNode.next
    }
    previous.next = currentNode.next
    this.length--
    return currentNode
  }
  isEmpty() {
    return this.length === 0
  }
  print() {
    const list = []
    let currentNode = this.head
    while (currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }
    return list.join(' => ')
  }
}
