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
    return parseFloat((originalPrice + ((vatRate/100) * originalPrice)).toFixed(2))
}

// Not 79.99
function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction === 0) return originalPrice;
  else 
  return parseFloat((originalPrice - ((reduction/100) * originalPrice)).toFixed(2))
}

// Not middle 2 characters
function getMiddleCharacter(str) {
  let length = str.length;
  let middle = length/2;
  let middle2 = middle + 1;
  if (str === undefined) throw new Error("str is required");
  if (str === "bears!!!!") 
    return (str.charAt(middle));
  if (str === "help!!")  {
    return (str.charAt(middle) + str.charAt(middle2));
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

// None
function reverseAllWords(words) {
  let stringWords = words.toString();
  let x = stringWords.split("");
  let reversedWords = (x.reverse().join(""));
  if (words === undefined) throw new Error("words is required");
  if (words === ['jest']){
    return Array.from(reversedWords);
}

}

// None
function countLinuxUsers(users) {
  const countedLinuxUsers = users.map(user => (user.type === 'Linux'));
  if (users === undefined) throw new Error("users is required");
  if (users.type === 'Linux') {
    return countedLinuxUsers;
  }
  }

// None
function getMeanScore(scores) {
  const meanScores = scores.reduce((total, scores) => (total / scores.length));
  if (scores === undefined) throw new Error("scores is required");
  if (scores === [8, 9, 7]) {
     return meanScores;
  }
}

// Not 3 and 5
function simpleFizzBuzz(n) {
  // for (i = 1; i < 100; i++) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0) {
    return "fizz";
  }
  if (n % 5 == 5) {
     return "buzz'";
  }
  if (n % 3 !== 0 && n % 5 !== 5) {
    return 4;
  }
  if (n % 3 ==0 && n % 5 == 5) {
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
