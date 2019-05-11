const findNextNumber = (nums, n) => {
  const numberPosition = nums.indexOf(n);
  const plusOnePosition = numberPosition + 1
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here! 
  if (nums.indexOf(n) === -1) {
    return null;
  }
  // Struggling on if number is in the last position return null, as trying to compare an index with a number
  // I don't know how to get the value of the index position?
  
  // Find index position of n 
  // const lastNumber = nums.indexOf(n)  -- This gives the index position 6
  // If lastNumber === n then return null
  // if(lastNumber === n {               --- Won't work as comparing a number and an index position
  // return null
  //})
  return nums[plusOnePosition];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
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