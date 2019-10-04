Array.prototype.remove = function(item) {
  const index = this.indexOf(item)
  if (index !== -1) this.splice(index, 1)
}
Array.prototype.removeAt = function(index) {
  return this.splice(index, 1)
}

Array.prototype.insert = function(item, index) {
  return this.splice(index, 0, item)
}
