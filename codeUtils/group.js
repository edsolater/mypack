/**
 * 按条件从数据的集合中细分信息
 * @param {Array<any>} dataCollection
 * @param {{[groupName:string]: filtFunc}} template 描述分类后的结构、纳入此类的条件
 * @example
 * group(['animal_horse', 'animal_bird', 'animal_monkey', 'fruit_banana'], {
 *   animal: item => item.match(/^animal_/),
 *   fruit: item => item.match(/^fruit_/)
 * }) => {
 *   animal: ['animal_horse', 'animal_bird', 'animal_monkey'],
 *   fruit: ['fruit_banana']
 * }
 */
export function group(
  dataCollection,
  template = { groupName: item => item.id.match(/^hello/) },
  config = { /*不能出现单元素的数组*/ noUnary: false }
) {
  // 根据配置设定核心处理机制
  function alwaysArray(obj, property, item) {
    if (Array.isArray(obj[property])) {
      obj[property].push(item)
    } else {
      obj[property] = [item]
    }
  }
  function noUnary(obj, property, item) {
    if (Array.isArray(obj[property])) {
      obj[property].push(item)
    } else if (obj[property]) {
      obj[property] = [obj[property], item]
    } else {
      obj[property] = item
    }
  }
  const coreHandler = config.noUnary ? noUnary : alwaysArray

  // 处理数据
  const outputCollection = {}
  dataCollection.forEach(item => {
    for (const [groupName, pattern] of Object.entries(template)) {
      if (
        (typeof pattern === 'function' && pattern(item)) ||
        (pattern instanceof RegExp && item.match(pattern))
      ) {
        coreHandler(outputCollection, groupName, item)
        break
      }
    }
  })
  return outputCollection
}
console.log(
  group(
    ['animal_horse', 'animal_bird', 'animal_monkey', 'fruit_banana', 'gas'],
    {
      animal: item => item.match(/^animal_/),
      fruit: /^fruit_/
    },
  )
)
const foo = /^friut/
console.log(3 instanceof RegExp)
