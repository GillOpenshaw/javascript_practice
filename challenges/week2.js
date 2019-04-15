function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  let sandwichFilling = sandwich.fillings.map(filling => {
    return filling
  });

  /*function getFillings(sandwich) {
      if (sandwich === undefined) throw new Error("ingredients is required");
       //Your code here!
      let sandwichFilling = sandwich.fillings.map (filling => {
       return filling 
      })
      console.log(sandwichFilling);
    };  
    
    getFillings(sandwich);
    getFillings(sandwich2); */

 function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    else if
      (person.city === "Manchester")
      return true;
    else if
      (person.city != "Manchester")
      return false;
  };

  /*const person = {
        name: "Mohammed",
        city: "Manchester",
        age: 23
      };
     expect(isFromManchester(person)).toBe(true)//;
   // );
  
  function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    else if 
    (person.city === "Manchester") 
        return true;
  };
  
  isFromManchester(person);*/

  function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    // Your code here!
    let busCapacity = 40;
 if (people <= busCapacity) {
   return 1;
 }
   else if (people > busCapacity) {
     return Math.ceil(people/busCapacity)
   }
}

 /*function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
 let busCapacity = 40;
 if (people <= busCapacity) {
   return 1;
 }
   else if (people > busCapacity) {
     return Math.ceil(people/busCapacity)
   }
} */

  function countSheep(arr) {
    if (!arr) throw new Error("arr is required");
    // Your code here!
  }

  /* let count = 0;
function countSheep(arr) {
    if (!arr) throw new Error("arr is required");
    else if
     (arr.forEach(function(sheep){
      let countedSheep = count +=
        return countedSheep
  }))
};

countSheep(arr);*/

  function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    const firstLetter = person.address.postcode[0];
    const secondLetter = person.address.postcode[1];
    const isAlphabeticLetter = isNan(secondLetter);
    return firstLetter === "M" && !isAlphabeticLetter;
  }

  module.exports = {
    getFillings,
    isFromManchester,
    countSheep,
    getBusNumbers,
    hasMPostCode
  };
