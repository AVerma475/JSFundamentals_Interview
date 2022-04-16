// Q1. Read 3 Text files F1, F2, F3 serially using Promises

const fs = require("fs");

let f1ReadPromise = fs.promises.readFile("f1.txt");

function readF2File(data){
    console.log(data + "" );
    let f2ReadPromise =  fs.promises.readFile("f2.txt");
    return f2ReadPromise;
}


function allDone(data){
    console.log(data + " ");
    console.log("DOne");
}




f1ReadPromise
.then(readF2File)
.then(allDone)
.catch((err) => console.log(err));