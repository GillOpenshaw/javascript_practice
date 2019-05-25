// Pass
function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  const filling = sandwich.fillings
  return (filling)
}

// Pass
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  else if
    (person.city === "Manchester")
    return true;
  else if
    (person.city != "Manchester")
    return false;
}

// Pass
function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let busCapacity = 40;
  if (people <= busCapacity) {
    return 1;
  }
  else if (people > busCapacity) {
    return Math.ceil(people / busCapacity)
  }
}

// Pass
function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  let count = 0;
  arr.forEach(item => {
    if (item === "sheep") {
      count++
    }
  })
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const firstLetter = person.address.postCode[0];
  const secondLetter = person.address.postCode[1];
  const isAplha = isNaN(Number(secondLetter));
  return firstLetter === "M" && !isAplha; 
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
