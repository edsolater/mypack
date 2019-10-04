function partial(fn, index, param) {
  return (...params) => {
    params.splice(index, 0, param)
    fn(...params)
  }
}
const add = (a, b, c) => console.log(a, b, c)
const foo = partial(add, 1, 10)
foo(0, 1)
