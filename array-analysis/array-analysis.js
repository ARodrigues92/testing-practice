function analyse(arr) {
  const average =
    arr.reduce((acc, e) => {
      return acc + e;
    }, 0) / arr.length;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}

export default analyse;
