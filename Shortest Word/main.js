function findShort(s) {
  if (s.length == 0) return s;

  const str = s.split(" ");
  let pivot = str[0];

  for (let x = 1; x < str.length; x++) {
    if (pivot.length > str[x].length) {
      pivot = str[x];
    }
  }

  return pivot.length;
}
