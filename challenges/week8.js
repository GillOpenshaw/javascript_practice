//Pass
const findNextNumber = (nums, n) => {
  const numberPosition = nums.indexOf(n);
  const plusOnePosition = numberPosition + 1
  const indexLast = nums.length - 1
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here! 
  if (nums.indexOf(n) === -1) {
    return null;
  }
  if (n === nums[indexLast]) {
    return null;
  }
  return nums[plusOnePosition];
};

// Not passed for all 1s
const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let count = {};
  for (let i = 0; i < str.length; i++) {
    const num = str[i];
    if (count[num] === false) {
      count[num] = 0
    }
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }
  }
  return count
};

// Pass
const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  // Convert number to string so it can be split
  // Split the string elements
  // Reverse the string
  // Join the string elements together
  // Convert the string back to a number
  // Return the number
  const numberReversed = parseFloat(n.toString().split('').reverse().join(''))
  return numberReversed
};

// Pass
const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  // Set variable nums to 0 using let as the variable value will change
  // Loop through arrays
  // Loop through inner arrays
  // As each loop passes through add the item to the variable nums
  // Return nums
  let nums = 0
  arrs.forEach(innerArr => {
    innerArr.forEach(item => {
      nums = nums + item
    })
  })
  return (nums)
};

// Pass
const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  // If array length is less than 2, return the original array
  // Save first item to a variable firstItem using .shift()
  // Save last item to a variable lastItem using .pop()
  // Add the lastItem to the first position using .unshift()
  // Add the firstItem to the last position using .push()
  // Return the array
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


// Not passed as not sure how to link searchTerm to any part of the searchTerm such as "table"
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  for (let searchTerm in haystack) {
    if (haystack[searchTerm] === "searchTerm") {
      // also tried if(haystack[searchTerm].includes("searchTerm")) {
      return true
    } else {
      return false
    }
  }
};

// Pass in Node.js but not in Visual Studio Code
const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let removePunctuationWord = str.replace(/[\!\,\?]/g, '');
  let splitWords = removePunctuationWord.split(" ");
  let uniqueWords = [];
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
