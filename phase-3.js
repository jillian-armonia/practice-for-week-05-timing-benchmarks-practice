const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  addNums10(increment);

  function addNums10(increment) {
    let result = [];
    let start = 0;
    console.time(`addNums call timer`)

    for (let i = 0; i < 10; i++){
      let startTime = Date.now();
      result.push(addNums(start += increment))
      let endTime = Date.now();

      console.log(endTime - startTime)

      // console.timeLog(`addNums call timer`)
    }

    console.timeEnd(`addNums call timer`)

    return result;

  }



}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  addManyNums10(increment);

  function addManyNums10(increment) {
    let result = [];
    let start = 0;

    for (let i = 0; i < 10; i++){
      let startTime = Date.now();
      result.push(addManyNums(start += increment))
      let endTime = Date.now();

      console.log(endTime - startTime)
    }

    return result;

  }
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
