function likes(names) {
  let message = "";

  switch (names.length) {
    case 0:
      message = "no one likes this";
      return message;
      break;
    case 1:
      message = names[0] + " likes this";
      return message;
      break;
    case 2:
      message = names[0] + " and " + names[1] + " like this";
      return message;
      break;
    case 3:
      message = names[0] + ", " + names[1] + " and " + names[2] + " like this";
      return message;
      break;
    default:
      message =
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this";
      return message;
  }
}
