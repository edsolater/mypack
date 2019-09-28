Array.prototype.remove = function (...items) {
  items.forEach(item => {
    const index = this.indexOf(item);
    if (index !== -1)
      this.splice(index, 1);
  });
  return this;
}
