/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");
  let sumOfNumbers = 0;
  arr.forEach(num => {
    if (num % 3 === 0 || num % 5 === 0) {
      sumOfNumbers += num;
    }
  });
  return sumOfNumbers;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (!str) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("a string is required");
  if (str.includes("C") || str.includes("G") || str.includes("T") || str.includes("A")) {
    str.toUpperCase()
    return true
  } else {
    return false
  }
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGCA".
 * @param {String} str
 * @returns {String}
 */
// expect(isValidDNA("A")).toBe("T");
// expect(isValidDNA("T")).toBe("A");
// expect(isValidDNA("C")).toBe("G");
// expect(isValidDNA("G")).toBe("C");
const getComplementaryDNA = str => {
  if (!str) throw new Error("str is required");
  const strSplit = str.split("");
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
const complementaryPairs = strSplit.map = (char => pairs[char]);
 return complementaryPairs.join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (!n) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("a number is required");
  if (n <= 1) return false;
  for (let i = 2; i < n; i++)
    if (n % i === 0) return false;
  return true;
};



/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (!n) throw new Error("n is required");
  if (!fill) throw new Error("fill is required");

  // complex type should return a nested array with 3 sub arrays in it
  // each sub array should have a number of values in it
  // checking the return value is equal to a a nested array

  // Check input number(n)
  // Create n number of arrays - loop
  const matrix = []
  for (let i = 0; i < n; i++) {
    const row = []
    // Create an inner array with n fills - loop
    for (let j = 0; j < n; j++) {
      row.push(fill)
    }
    matrix.push(row)
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (!staff) throw new Error("staff is required");
  if (!day) throw new Error("day is required");
  if (staff.length === 0) {
    return false;
  }
  let staffNumbers = 0;
  for (let index in staff) {
    const person = staff[index];

    person.rota // array with days
    if (person.rota.includes(day)) {
      staffNumbers += 1
    }
  }
  if (staffNumbers >= 3) {
    return true
  } else {
    return false
  }
};


module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
