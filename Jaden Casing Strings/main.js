String.prototype.toJadenCase = function () {
  let str = this;

  let array = str.split(" ");
  let arrayToPush = [];

  array.forEach((element) => {
    element = element.split("");
    element[0] = element[0].toUpperCase();
    element = element.join("");

    arrayToPush.push(element);
  });

  str = arrayToPush.join(" ");

  return str;
};
