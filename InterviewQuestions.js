//======================================================================== 1, Print 1 to 10 at interval of 2 seconds

// // Wrong solution 
for(var i = 1; i <= 10; i++){ // var - function scoped
    setTimeout(() => console.log(i), 2000*i);
}

// Correct solution 
for(let i = 1; i <= 10; i++){ // use let because it is block scoped
    setTimeout(() => console.log(i), 2000*i);
}

//===================================================================================================================

//=================================================================== Implement clearAllTimeout in JavaScript | Facebook Interview Question

// Solution 1
const originalTimeout = window.setTimeout;
let timeoutIdsArr = [];

window.setTimeout = (fn, delay) => {
  const id = originalTimeout(fn, delay);
  timeoutIdsArr.push(id);

  return id;
}

function clearAllTimeout() {
  while (timeoutIdsArr.length) {
    const id = timeoutIdsArr.pop();
    console.log("Clearing ", id);
    window.clearTimeout(id);
  }
}


setTimeout(() => console.log("ONE"), 1000);
setTimeout(() => console.log("TWO"), 2000);
setTimeout(() => console.log("THREE"), 3000);

clearAllTimeout();



// Solution 2 - More Optimized

let MyTimer = {
    timeoutIdsArr: [],
    setTimeout: function(fn, delay){
        const id = window.setTimeout(fn, delay);
        this.timeoutIdsArr.push(id);
        return id;
    },
    clearAllTimeout : function(){
        while(this.timeoutIdsArr.length){
            const id = this.timeoutIdsArr.pop();
            console.log("Clearing Timeout with Id - ", id);
            clearTimeout(id); 
        }
    }
}

const id1 = MyTimer.setTimeout(() => console.log("One"), 1000);
const id2 = MyTimer.setTimeout(() => console.log("Two"), 2000);
const id3 = MyTimer.setTimeout(() => console.log("Three"), 3000);
const id4 = MyTimer.setTimeout(() => console.log("Four"), 4000);

MyTimer.clearAllTimeout();