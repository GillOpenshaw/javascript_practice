/* Problem with For Loop This returns array with separate elements
const smallNumbers = [];
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  for (let i = 0; i < findSmallNums.length; i++) {
    const num1 = findSmallNums[i];
    if (num1 < 1) {
      smallNumbers.push([num1]);
    }
  }
  return smallNumbers;
} */

/* Error with [-7, -243]
let smallNumbers = [];

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  nums.forEach(function(num) {
    if (num < 1) {
      smallNumbers.push(num);
    }
  });
  return smallNumbers;
} */


function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
