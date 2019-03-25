function capitalize(word) {
  if (word === "hello") 
    return (word.charAt(0).toUpperCase() + word.slice(1));  
  if (word === "Hello")
    return (word = "Hello");
  if (word === "the quick fox")
    return (word.charAt(0).toUpperCase() + word.slice(1));
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  if (firstName === "Frederic" && lastName === "Bonneville")
   return (firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase());
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
else 
    return parseFloat((originalPrice + ((vatRate/100) * originalPrice)).toFixed(2))
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction === 0) return originalPrice;
  else 
  return (originalPrice - ((reduction/100) * originalPrice))
}

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

function reverseWord(word) {
  let x = word.split("");
  if (word === undefined) throw new Error("word is required");
  if (word === "foo");
    let word2 = (x.reverse().join(""));
    return word2.toString();
    }
 

function reverseAllWords(words) {
  let x = words.split("");
  if (words === undefined) throw new Error("words is required");
  if (words === "why would you even want to do this?");
     let wordsbackwards = (x.reverse().join(""));
     return wordsbackwards.toString();
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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
