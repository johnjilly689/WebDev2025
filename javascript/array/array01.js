const arrays = [1, 2, 3, 4];

arrays.push(6); //use to add at last
arrays.pop(); // use to delete from last
//to convert array to string
const newarrays = arrays.join();
console.log(typeof newarrays);

//splice and slice

const slicearray = arrays.slice(1, 3);
console.log(slicearray);
console.log(arrays);

const splicearrays = arrays.splice(1, 3);
console.log(splicearrays);
console.log(arrays);

//difference in slice and splice is slice is stack memory so it only cut the array copy,but splice works as heap memory so changing in the reference change the original also
