// Pass
function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  const squaredNums = nums.map(function (num) {
    return num * num
  });
  return squaredNums;
}

// None
function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  let newWord = [];
  let joinedWord = "";
  console.log(words.length);
  words.forEach(function(word, index) {
    if (words.length === 1) {
      joinedWord = word.charAt(0).toLowerCase() + word.slice(1);
      newWord.push(joinedWord);
      
    }
    if (words.length > 1) {
      if (index == 0) {
        joinedWord = word.charAt(0).toLowerCase() + word.slice(1);
        newWord.push(joinedWord);
      }
      if (index >= 1) {
        joinedWord = word.charAt(0).toUpperCase() + word.slice(1);
        newWord.push(joinedWord);   
      }
    }
  })
  return(newWord.join(""));
}


// None
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

// Pass
function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let foundFoodItem = false;

  menu.forEach(function (menuItem) {
    menuItem.ingredients.forEach(function (menuIngredient) {
      if (menuIngredient === ingredient) {
        foundFoodItem = true;
      }
    })
  })
  return foundFoodItem;
}


// Pass
function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  else {
    const arr3 = [];
    arr1.forEach(function (num) {
      if (arr2.includes(num) && !arr3.includes(num)) {
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