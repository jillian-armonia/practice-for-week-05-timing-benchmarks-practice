const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let result = [];
  let start = 0;

  for (let i = 0; i < 10; i++){
    result.push(addNums(start += increment))
  }

  return result;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let result = [];
  let start = 0;

  for (let i = 0; i < 10; i++){
    result.push(addManyNums(start += increment))
  }

  return result;

}

module.exports = [addNums10, addManyNums10];

console.log(addManyNums10(1))
