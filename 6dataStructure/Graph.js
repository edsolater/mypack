class Graph {
  constructor() {
    this.AdjList = new Map()
  }
  addVertex(vertex) {
    if (!this.AdjList.has(vertex)) {
      this.AdjList.set(vertex, [])
    } else {
      throw 'Already Exist!!!'
    }
  }
  addEdge(vertex, node) {
    // 向顶点添加边之前，必须验证该顶点是否存在。
    if (this.AdjList.has(vertex)) {
      // 确保添加的边尚不存在。
      if (this.AdjList.has(node)) {
        let arr = this.AdjList.get(vertex)
        // 如果都通过，那么可以将边添加到顶点。
        if (!arr.includes(node)) {
          arr.push(node)
        }
      } else {
        throw `Can't add non-existing vertex ->'${node}'`
      }
    } else {
      throw `You should add '${vertex}' first`
    }
  }
  print() {
    for (let [key, value] of this.AdjList) {
      console.log(key, value)
    }
  }
  createVisitedObject() {
    let arr = {}
    for (let key of this.AdjList.keys()) {
      arr[key] = false
    }
    return arr
  }
  // Breadth-First Search 广度优先搜索
  bfs(startingNode) {
    let visited = this.createVisitedObject()
    let q = []
    visited[startingNode] = true
    q.push(startingNode)
    while (q.length) {
      let current = q.pop()
      console.log(current)
      let arr = this.AdjList.get(current)
      for (let elem of arr) {
        if (!visited[elem]) {
          visited[elem] = true
          q.unshift(elem)
        }
      }
    }
  }
  // Depth-First Search 深度优先搜索
  dfs(startingNode) {
    console.log('\nDFS')
    let visited = this.createVisitedObject()
    this.dfsHelper(startingNode, visited)
  }
  dfsHelper(startingNode, visited) {
    visited[startingNode] = true
    console.log(startingNode)
    let arr = this.AdjList.get(startingNode)
    for (let elem of arr) {
      if (!visited[elem]) {
        this.dfsHelper(elem, visited)
      }
    }
  }
  doesPathExist(firstNode, secondNode) {
    let path = []
    let visited = this.createVisitedObject()
    let q = []
    visited[firstNode] = true
    q.push(firstNode)
    while (q.length) {
      let node = q.pop()
      path.push(node)
      let elements = this.AdjList.get(node)
      if (elements.includes(secondNode)) {
        console.log(path.join('->'))
        return true
      } else {
        for (let elem of elements) {
          if (!visited[elem]) {
            visited[elem] = true
            q.unshift(elem)
          }
        }
      }
    }
    return false
  }
}
