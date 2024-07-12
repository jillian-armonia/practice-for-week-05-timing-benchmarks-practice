// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0;

  for (let i = sum; i <= n; i++){
    sum += i;
  }

  return sum;

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0;

  for (let i = total; i <= n; i++){
    total += addNums(i);
  }

  return total;

}



module.exports = [addNums, addManyNums];

console.log(addManyNums(10))
