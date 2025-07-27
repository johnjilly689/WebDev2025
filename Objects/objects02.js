// boolean in object

const tinderuser = {}; // empty object
tinderuser.id = false;

//object under object

const regularuser = {
  userfullname: {
    Fname: "hitesh",
    Lname: "Sonam",
  },
};

console.log(regularuser.userfullname.Fname);
//objects under arrays

const users = [
  {
    id: 1,
    name: "Hitesh",
    age: 30,
  },
  {
    id: 2,
    name: "Sonam",
    age: 28,
  },
  {
    id: 3,
    name: "Rohan",
    age: 25,
  },
];
console.log(users[0].name); // Accessing the name of the first user
console.log(users[1].age); // Accessing the age of the second user

//how to loop through objects:
// we can use length property to find length of objects, but to do that we need to convert them to arrays first.
// Objects do not have a length property like arrays, so we cannot directly use length on objects
// to loop over objects we need to first convert them to arrays,taking their keys or values.

console.log(Object.keys(users[0])); // this collect them in arrays, Get keys of the users array
console.log(Object.values(users[0])); // Get values of the users array
console.log(Object.entries(users)); // Get entries (key-value pairs) of the users array
