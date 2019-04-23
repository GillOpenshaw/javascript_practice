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
joinedWords = firstJoined + secondJoined;
console.log(joinedWords);*/

/*letters.forEach(item, index => {
  capitaliseLetters = letters[1].slice(0,1).toUpperCase()
  }
  console.log(capitaliseLetters);*/

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
/* 
let countedSubjects = 0;
people.forEach(function(peopleInfo){ 
countedSubjects = peopleInfo.subjects;
if(peopleInfo.subjects !== null){
  countedSubjects ++
}
else countedSubjects = 0
})
return countedSubjects; 
} */
}
 

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
    const arr3 =[];
    arr1.forEach(function(num) {
      if (arr2.includes(num) && !arr3.includes(num)){
        arr3.push(num)
      }
    })
    return arr3.sort();
  }
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};