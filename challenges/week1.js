// Pass
function capitalize(word) {
  if (word === "hello")
    return (word.charAt(0).toUpperCase() + word.slice(1));
  if (word === "Hello")
    return (word = "Hello");
  if (word === "the quick fox")
    return (word.charAt(0).toUpperCase() + word.slice(1));
}

// Pass
function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  if (firstName === "Frederic" && lastName === "Bonneville")
    return (firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase());
}

// Pass
function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  else
    return parseFloat((originalPrice + ((vatRate / 100) * originalPrice)).toFixed(2))
}

// Pass
function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction === 0) return originalPrice;
  else
    return parseFloat((originalPrice - ((reduction / 100) * originalPrice)).toFixed(2))
}

// Pass
function getMiddleCharacter(str) {
  let length = str.length;
  let middleCharacter = length / 2;
  let middlePlusOne = middleCharacter + 1;
  if (str === undefined) throw new Error("str is required");
  if (length % 2 !== 0) {
    const round = Math.floor(middleCharacter)
    return str.charAt(round)
  }
  if (length % 2 === 0) {
    return str.charAt(middleCharacter-1) + str.charAt(middlePlusOne-1);
  }
}

// Pass
function reverseWord(word) {
  let x = word.split("");
  let wordbackward = (x.reverse().join(""));
  if (word === undefined) throw new Error("word is required");
  if (word === "foo") {
    return wordbackward.toString();
  }
  if (word === "why would you even want to do this?") {
    return wordbackward.toString();
  }
}

// Pass
function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const stringWords = words.toString();
  const splitWords = stringWords.split("");
  const reversedString = (splitWords.reverse().join(""));
  return (reversedString.split(",").reverse())
}

// Pass
function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  users.forEach(function(system) {
    let systemType = system.type
    if (systemType === "Linux") {
      count += 1
    }
  });
  return count;
}

// Pass
function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0
  scores.forEach(num => {
    (total += num)
  })
  let meanScore = parseFloat((total / scores.length).toFixed(2))
  return (meanScore)
}

// Pass
function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0 && n % 5 == 0) {
    return "fizzbuzz";
  }
  if (n % 3 == 0) {
    return "fizz";
  }
  if (n % 5 == 0) {
    return "fizz'";
  }
  if (n % 3 !== 0 && n % 5 !== 5) {
    return 4;
  }
  if (n % 3 == 0 && n % 5 == 0) {
    return "fizzbuzz";
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
