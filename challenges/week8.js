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

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  // Returns but in the wrong order i.e. 0:..  1:.., rather than 1:.. 0..
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

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!

  // Firsy Try
  // Set variable nums to 0
  // Loop through each number in the array
  // Add each number to the variable
  // Return nums
  /* let nums = 0;
  arrs.forEach = (arrs) => {
    nums = nums + arrs[i]
    return (nums)
  }*/

// Second Try
  // Initialize Value to 0 as more than one array
  // Use Reduce to reduce the array to a single value
  // Each time the accumulator gets first the inital value, then the callback value
  // Get the current value and add this to the accumulator
  // Add to an empty array
  // Return array 
  /*const nums = arrs.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );
  return nums*/

  };
const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  //Returns defined - can't get it to read swap
  //function swap(arr) {
  //[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  //}
  //return swap[arr]

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
