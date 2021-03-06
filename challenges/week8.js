//Pass
const findNextNumber = (nums, n) => {
  const numberPosition = nums.indexOf(n);
  const plusOnePosition = numberPosition + 1
  const indexLast = nums.length - 1
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.indexOf(n) === -1) {
    return null;
  }
  if (n === nums[indexLast]) {
    return null;
  }
  return nums[plusOnePosition];
};

// Pass
// Create a variable ones and set to 0
// Create a variable zeros and set to 0
// Loop through checking for 1s and os
// If a 1 (String) is found add 1 to variable ones
// If a 0 (String) is found add 1 to variable zeros
// Return ones and zeros as an array
const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let ones = 0;
  let zeros = 0;
  for (let i = 0; i < str.length; i++) {
    const num = str[i];
    if (num === "1") {
      ones++;
    }
    else if (num === '0') {
      zeros++;
    }
  }
  return {
    1: ones,
    0: zeros
  }
};

// Pass
// Convert number to string so it can be split
// Split the string elements
// Reverse the string
// Join the string elements together
// Convert the string back to a number
// Return the number
const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const numberReversed = parseFloat(n.toString().split('').reverse().join(''))
  return numberReversed
};

// Pass
// Set variable nums to 0 using let as the variable value will change
// Loop through arrays
// Loop through inner arrays
// As each loop passes through add the item to the variable nums
// Return nums
const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let nums = 0
  arrs.forEach(innerArr => {
    innerArr.forEach(item => {
      nums = nums + item
    })
  })
  return (nums)
};

// Pass
// Your code here!
// If array length is less than 2, return the original array
// Save first item to a variable firstItem using .shift()
// Save last item to a variable lastItem using .pop()
// Add the lastItem to the first position using .unshift()
// Add the firstItem to the last position using .push()
// Return the array
const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr
  }
  const firstItem = arr.shift()
  const lastItem = arr.pop()
  let newArray = arr
  newArray.unshift(lastItem)
  newArray.push(firstItem)
  return newArray
};


// Pass
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  searchTerm = searchTerm.toLowerCase();
  for (let key in haystack) {
    const value = haystack[key];
    if (typeof value === "string") {
      if (value.toLowerCase().includes(searchTerm)) {
        return true;
      }
    }
  }
  return false;
};

// Pass
const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let removePunctuationWord = str.replace(/[^a-zA-Z ]/g, "");
  let splitWords = removePunctuationWord.split(" ");
  let uniqueWords = {};
  for (let i = 0; i < splitWords.length; i++) {
    const word = splitWords[i].slice(1);
    const lowerWords = splitWords[i].charAt(0).toLowerCase();
    const words = lowerWords + word;
    if (uniqueWords[words] === undefined) {
      uniqueWords[words] = 1;
    } else {
      uniqueWords[words] += 1;
    }
  }
  return uniqueWords
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
