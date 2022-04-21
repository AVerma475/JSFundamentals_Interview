// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Thought process Pseudocode
// A function which takes a function as an argument and an optional parameter for execution context
// The function argument must be passed the array index, the item and the context
// The result of the callback invokation is tested, if true the array element is pushed to a new array item

let array = [1, 2, 3, 4, 5];

const log = (val) => console.log(val);

Array.prototype.myFilter = function (callback) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    if (this.indexOf(this[index]) >= 0 && callback(this[index], index, this)) {
      res.push(this[index]);
    }
  }
  return res;
};

const res1 = array.filter((x, index, array) => {
  log(x + " " + index + " -> [" + array + "]");
  return x % 2 == 0;
});

const res2 = array.myFilter((x, index, array) => {
  log(x + " " + index + " -> [" + array + "]");
  return x % 2 == 0;
});

log(res1);
log(res2);
