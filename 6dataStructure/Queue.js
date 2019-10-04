/**
 * 队列，意义在于更具想象地组织代码，用代码更完善地模拟生活，限制Array过度灵活性，只把Array理解为数据的集合
 * @see https://mp.weixin.qq.com/s?__biz=Mzg5ODA5MzQ2Mw==&mid=2247484121&idx=1&sn=8d619c7e37a142fbbf41987cf1c26219&chksm=c0669a21f71113376dedbb2725ad7f86695326b257a426311b9c76e19d6c5d0b0cfe2a74dfb1#rd
 */
class Queue {
  constructor(items) {
    this.queue = items || []
  }
  enqueue(...items) {
    return this.queue.push(...items)
  }
  /**
   * 查看即将出队列的元素的值
   */
  get font() {
    return this.queue[this.queue.length - 1]
  }
  dequeue() {
    return this.queue.shift()
  }
  clear() {
    this.queue = []
  }
  get isEmpty() {
    return this.queue.length === 0
  }
  get size() {
    return this.queue.length
  }
  [Symbol.toPrimitive](){
    return this.queue
  }
}

class PriorityQueue extends Queue {
  enqueue(element, priority) {
    const queueElement = { element, priority }
    if (this.isEmpty) {
      super.enqueue(queueElement)
    } else {
      const preIndex = this.queue.findIndex(
        item => queueElement.priority < item.priority
      )
      if (preIndex > -1) {
        this.queue.splice(preIndex, 0, queueElement)
      } else {
        this.queue.push(queueElement)
      }
    }
    return this
  }
}

class LoopQueue extends Queue {
  
}
const priority = new PriorityQueue()
console.log(priority.enqueue(3,2).enqueue(4,1))
