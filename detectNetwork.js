// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

    //Turn the cardNumber string into number type
    var firstPrefix = parseInt(cardNumber.slice(0, 1))
    var firstTwoPrefix = parseInt(cardNumber.slice(0, 2))
    var firstThreePrefix = parseInt(cardNumber.slice(0, 3))
    var firstFourPrefix = parseInt(cardNumber.slice(0, 4))
    var firstSixPrefix = parseInt(cardNumber.slice(0, 6))

    //The if statements for different cards
    if ((firstTwoPrefix === 38 || firstTwoPrefix === 39) && cardNumber.length === 14) {
      return 'Diner\'s Club';
    } else if ((firstTwoPrefix === 34 || firstTwoPrefix === 37) && cardNumber.length === 15) {
      return 'American Express';
    } else if ((firstPrefix === 4 && (firstFourPrefix !== 4903 && firstFourPrefix !== 4905 && firstFourPrefix !== 4911 && firstFourPrefix !== 4936)) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Visa';
    } else if ((firstTwoPrefix === 51 || firstTwoPrefix === 52 || firstTwoPrefix === 53 || firstTwoPrefix === 54 || firstTwoPrefix === 55) && cardNumber.length === 16) {
      return 'MasterCard';
    } else if ((firstFourPrefix === 6011 || (firstThreePrefix >= 644 && firstThreePrefix <= 649) || firstTwoPrefix === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Discover';
    } else if ((firstFourPrefix === 5018 || firstFourPrefix === 5020 || firstFourPrefix === 5038 || firstFourPrefix === 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
      return 'Maestro';
    } else if (((firstSixPrefix >= 622126 && firstSixPrefix <= 622925) || (firstThreePrefix >= 624 && firstThreePrefix <= 626) || (firstFourPrefix >= 6282 && firstFourPrefix <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
      return 'China UnionPay';
    } else if ((firstFourPrefix === 4903 || firstFourPrefix === 4905 || firstFourPrefix === 4911 || firstFourPrefix === 4936 || firstSixPrefix === 564182 || firstSixPrefix === 633110 || firstFourPrefix === 6333 || firstFourPrefix === 6759) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
      return 'Switch';
    }
};
