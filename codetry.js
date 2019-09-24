function fromHEX(value) {
  if (typeof value === 'string') {
    let matchStr;
    if ((matchStr = value.match(/^#([0-9a-fA-F]{7}|[0-9a-fA-F]{9})$/))) {
      console.log('matchStr: ', matchStr);
      if (matchStr.length === 6) {
        // 例如: value = "#000fff"
        return {
          r: parseInt(matchStr.slice(0, 2), 16),
          g: parseInt(matchStr.slice(2, 4), 16),
          b: parseInt(matchStr.slice(4, 6), 16)
        };
      } else if (matchStr.length === 3) {
        // 例如: value = "#3ef"
        const dulp = n => n+n
        return {
          r: parseInt(dulp(matchStr.slice(0, 1)), 16),
          g: parseInt(dulp(matchStr.slice(1, 2)), 16),
          b: parseInt(dulp(matchStr.slice(2, 3)), 16)
        };
      }
    }
  }
}

console.log(fromHEX('#3ef'));
