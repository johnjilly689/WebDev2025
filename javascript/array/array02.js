// what you will learn in this doc is:
// spread operator(...), concat, Array.from, Array.isArray,Array.of

//concat: it concat two array and give a new array

const array1 = ["shaktiman", "powerpunch"];
const array2 = ["bubbleman", "guman"];

const arrayconcat = array1.concat(array2);
console.log(arrayconcat);

// but what if there are more then two array to concat we can use concat but it will be long process,so we use (...) spread operator
const array3 = ["begin"];
const spreadarray = [...array1, ...array2, ...array3];
console.log(spreadarray);

// Array.isArray(): it is used to check if a variable is array, remember A of Array must be capital, case sensitive
const checkarray = "john";
console.log(Array.isArray(checkarray));
console.log(Array.from(checkarray));

//Array.of(variable1,variable2,...): use to make array from set of variables
let score1 = 100;
let score2 = 200;

let score3 = 300;
console.log(Array.of(score1, score2, score3));
