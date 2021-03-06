// Pass
function findSmallNums(nums) {
  const smallNumbers = [];
  if (!nums) throw new Error("nums is required");
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    if (num1 < 1) {
      smallNumbers.push(num1);
    }
  }
  return smallNumbers;
}

// Pass
function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const namesBeginningWith = [];

  names.forEach(function (name) {
    if (char === name[0]) {
      namesBeginningWith.push(name)
    }
  })
  return namesBeginningWith
}

// Pass
function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = [];
  //for (let i = 0; i < words.length; i++) {
  words.forEach(function (word) {
    const first3Chars = word.slice(0, 3);
    if (first3Chars === "to ") {
      verbs.push(word);
    }
  });
  return verbs;
}

// Pass
function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers = [];
  nums.forEach(function (num) {
    if (Number.isInteger(num)) {
      integers.push(num)
    }
  })
  return integers;
}

// Pass
function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const displayName = user.data.city.displayName;
    cities.push(displayName);
  }
  return cities;
}

// Pass
function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = [];
  nums.forEach(function (num) {
    const squareRoot = Number(Math.sqrt(num).toFixed(2));
    squareRoots.push(squareRoot);
  });
  return squareRoots;
}

// Pass
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  if (!str) throw new Error("str is required");
  let foundSentence = [];
  sentences.forEach(function (sentence) {
    let sentenceCase = sentence.toLowerCase()
    if (sentenceCase.includes(str)) {
      foundSentence.push(sentence)
    }
  })
  return (foundSentence)
}

// Pass
function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestTriangleSides = [];
  for (let i = 0; i < triangles.length; i++) {
    const triangle = triangles[i];
    triangle.sort(function (a, b) {
      return b - a
    });
    const longestSide = triangle[0];
    longestTriangleSides.push(longestSide);
  }
  return longestTriangleSides;
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
