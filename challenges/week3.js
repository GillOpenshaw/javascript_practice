function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here!
  const squaredNums = nums.map(function (num) {
    return num * num
  });
  return squaredNums;
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
}

/*// const letters = ["Mother", "Father"];
const letters = ["my", "variable"];

/* firstCharacter = letters[0][0].toLowerCase();
 console.log(firstCharacter);
restOfFirstWord = letters[0].slice(1);
console.log(restOfFirstWord);
firstJoined = firstCharacter + restOfFirstWord;
console.log(firstJoined);
capitaliseLetters = letters[1].slice(0,1).toUpperCase();
console.log(capitaliseLetters);
restOfLetters = letters[1].slice(1);
secondJoined = capitaliseLetters + restOfLetters;
console.log(secondJoined);
camelCaseWord = firstJoined + secondJoined;*/

/*letters.forEach(item, index => {
  capitaliseLetters = letters[1].slice(0,1).toUpperCase()
  }
  console.log(capitaliseLetters);*/


function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
}

/* function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  let count = 0;
 people.forEach(function (person){
   const subjectStudied = person.subjects;
   if (subjectStudied === "") {
     count +=1;
     console.log(count);
   }
 })
 return count;
 } */

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

}
/* function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  if (this.ingredient === "dark chocolate") {
   return true;
 }
} */


function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
  else {
    let intersection = arr1.filter(x => arr2.includes(x));
    return intersection;
  }
}
/* function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
  let arr1 = [1, 55, 4, 3, 7, 8];
  let arr2 = [55, 23, 65, 0];
  let arr3 = [];
  let jointArray = arr1.concat(arr2);
  let count = 0;
  let found = false;
  for (i = 0; i < jointArray.length; i++) {
    for (y = 0; y < arr3.length; y++) {
      if (jointArray[i] === arr3[y]) {
        found = true;
      }
      else (arr3.push(jointArray[i]));
    }
  }
  console.log(arr3);
} */
module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
