/**
 * 队列，意义在于更具想象地组织代码，限制Array过度灵活性，只把Array理解为数据的集合
 * @see https://mp.weixin.qq.com/s?__biz=Mzg5ODA5MzQ2Mw==&mid=2247484121&idx=1&sn=8d619c7e37a142fbbf41987cf1c26219&chksm=c0669a21f71113376dedbb2725ad7f86695326b257a426311b9c76e19d6c5d0b0cfe2a74dfb1#rd
 */
class Queue {
  constructor(...items) {
    this.reverse = false
    this.queue = [...items]
  }

  enqueue(...items) {
    return this.reverse
      ? this.queue.push(...items)
      : this.queue.unshift(...items)
  }
  dequeue() {
    return this.reverse ? this.queue.shift() : this.queue.pop()
  }
}
