// two ways to make object:
// literal and constructot

// object syntax: variable={};
const isuser = {
  name: "john",
  age: 18,
  location: "arunachal",
};
// remember keys are actually String, js read keys as string eventhough you dont add them under ""

// access objects two ways
// 1) object variable .key
// 2)object variable "[keys"]   # this [], is most prefereed

console.log(isuser["name"]);
console.log(isuser.name);

// to add a new value
isuser["name"] = "ravi";
console.log(isuser);

// to freeze the object values and no new update value should be added to object we use object.freeze(objectname)
// Object.freeze(isuser);
// isuser["name"] = "cena";
// console.log(isuser);

// to add functions in objects
isuser.greetings = function () {
  console.log(`hello ${this.name}`);
};

console.log(isuser);
console.log(isuser.greetings());

// ` `  , this syntax is use to write variable inside string with ${}
//  this keyword is use to refer object itself, that is if wee need name of that object only then how to tell we need the name of this object itself, for that we use this keyword
