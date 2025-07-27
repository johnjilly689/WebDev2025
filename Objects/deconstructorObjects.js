const course = {
  title: "Web Development 2025",
  price: 199.99,
  duration: "3 months",
};
//destructuring the object means extracting properties from the object, so that we can use them directly without the object name e.g when we call title in object we need to call course.title, but after destructuring we can just call title
const { title, price, duration } = course; // Destructuring the object

console.log(title); // Output: Web Development 2025
console.log(price); // Output: 199.99
// even we can rename the names of the variables while destructuring
const { title: courseTitle, price: coursePrice } = course; // Renaming during destructuring
console.log(courseTitle); // Output: Web Development 2025
console.log(coursePrice); // Output: 199.99

// in react we can use destructuring to extract properties from props object

// we can destruct array as well
