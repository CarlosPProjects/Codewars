function filter_list(l) {
  let array = [];
  l.forEach((element) => {
    if (typeof element != "string") {
      array.push(element);
    }
  });

  return array;
}
