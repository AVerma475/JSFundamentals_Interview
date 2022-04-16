//=================================   DRY RUN ==================================

// function a() {
//     let x = 1;
//     function aa() {
//       console.log(x);
//     }
  
//     return aa;
//   }
  
//   let fn = a();
//   let ans = fn();
//   var c = 100;
//   console.log(ans);
  
//= ===============================

  // for(var i =1; i <=4; i++){
  
  //   function cb(a){
  //     console.log(a);
  //   }
  
  //   setTimeout(cb, 2000*i, i);
  // }

//= ===============================
 // PROMISES ALWAYS GO INTO MICROTASK QUEUE
 // MICROTASK QUEUE HAS HIGHER PRIORITY THAN CALLBACK QUEUE
console.log("before");
setTimeout(() => {
    console.log("Time Over");
}, 5000);
fetch("URL")
.then((res) => res.json()) // whenever something is returned from Promise, it is returned as a Promise
.then((json) => console.log(json))
console.log("After");
