function defineSuit(card) {
  if (!card) return false;

  let result = "";
  card = card.split("");

  switch (card[card.length - 1]) {
    case "♣":
      result = "clubs";
      return result;
      break;
    case "♦":
      result = "diamonds";
      return result;
      break;
    case "♥":
      result = "hearts";
      return result;
      break;
    case "♠":
      result = "spades";
      return result;
      break;
  }
}
