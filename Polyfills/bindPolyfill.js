// Implement Function.bind
// Function.bind

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// Question
// Implement the Function.bind method

// Thought process Pseudocode
// The bind method is attached on the Function prototype, and is used to pass an execution context to the function
// The bind method takes 2 arguments, one being the context, and an optional parameter of an array of arguments
// Both these cases should work
// newFunction = oldFuntion.bind(context, arguments)
// newFunction()
// newFunction = oldFuntion.bind(context)
// newFunction(arguments)
// Hence the bind method should return a new function in which the arguments must be concatenated and applied using Function.apply
// Partially applied arguments, should also work, eg. if a method takes 2 arguments, the following should be valid
// function oldFunction(firstArgument, secondArgument) {

// }
// newFunction = oldFuntion.bind(context, firstArgument)
// newFunction(secondArgument)

const log = (val) => console.log(val);

let obj = {
  name: "Abhishek",
  surname: "Verma",
};

function printDetails(age) {
  log(this.name + " " + this.surname + " - " + age);
}

// let func = printDetails.bind(obj, 25);
// func();

//=============================================================================
Function.prototype.myBind = function (obj, ...params) {
  log(this);
  let currentContext = this;
  return function () {
    currentContext.apply(obj, [...params]);
  };
};
//=============================================================================

Function.prototype.myBind2 = function (object, ...params) {
  object._this = this;
  return function () {
    object._this(...params);
  };
};

// let func2 = printDetails.myBind(obj, 25);
// func2();
// let func3 = printDetails.myBind2(obj, 25);
// func3();
