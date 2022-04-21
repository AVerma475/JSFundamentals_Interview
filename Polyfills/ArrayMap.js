

// Polyfill for Array.map

let array = [1, 2, 3, 4, 5];

const log = (val) => console.log(val);

Array.prototype.myMap = function(callback) {
  let newArr = [];
  for(let index = 0; index < this.length; index++){
      if(this.indexOf(this[index]) >= 0)
        newArr.push(callback(this[index],index,this));
  }
  return newArr;
}

let newArray1 = array.map((val, index, arr) => log(val, index, arr));
let newArray2 = array.myMap((val, index, arr) => log(val, index, arr));

log(newArray1)
log(newArray2)

