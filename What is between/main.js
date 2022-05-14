function between(a, b) {
  if (a > b) return false;
  const array = [];

  for (let size = a; size <= b; size++) {
    array.push(size);
  }

  return array;
}
