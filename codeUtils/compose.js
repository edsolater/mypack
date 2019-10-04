function compose(fn1, fn2) {
  return x => fn2(fn1(x))
}
