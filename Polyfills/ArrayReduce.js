// Implement Array.reduce
// Array.reduce

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Question
// Implement the Array.reduce method

// Thought process Pseudocode
// A function which takes a function as an argument and a starting value
// The reducer function, takes four parameters, an accumulator, a current value, index, the source array
// The starting value if passed, must be used as the initial accumulator, if no accumulator is passed then the first element of the array becomes the first element itself
// The execution context of the callback becomes that of the accumulator.
// Give it a try!!

let array = [1, 2, 3, 4, 5];

const log = (val) => console.log(val);

Array.prototype.myReduce = function (callback, initialVal) {
  let res = initialVal ? initialVal : 0;
  for (let index = 0; index < this.length; index++) {
    res = callback(res, this[index], index, this);
  }
  return res;
};

const res1 = array.reduce((accumulator, val, index, array) => {
  log(accumulator + " - " + val + " - " + index + " - " + array);
  accumulator += val;
  return accumulator;
}, 0);

log("===================================================================");
const res2 = array.myReduce((accumulator, val, index, array) => {
  log(accumulator + " - " + val + " - " + index + " - " + array);
  accumulator += val;
  return accumulator;
}, 0);

log(res1);
log("===================================================================");
log(res2);
log("===================================================================");

const nums = [1, 2, 3, 4, 5];
const double = nums.myReduce((accum, current) => {
  accum.push(current * 2);
  return accum;
}, []);
console.log(double);
const queryString = "cat=meow&duck=quack&dog=woof";
const queryObject = queryString.split("&").myReduce((accum, current) => {
  const splitString = current.split("=");
  accum[splitString[0]] = splitString[1];
  return accum;
}, {});
console.log(queryObject);
