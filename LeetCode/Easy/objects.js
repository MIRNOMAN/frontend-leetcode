// Key-value pairs. Keys are strings or symbols.

// const obj = { a: 1, b: 2 };
// console.log(obj["a"]);
// obj["c"] = 3;
// console.log(obj["b"]);
// console.log(obj["c"]);

// console.log(obj.a);
// console.log(obj.b);



// Similar to objects but keys can be any type, and Maps preserve insertion order.

// const map = new Map();
// map.set("a",1);
// map.set(2, "b");
// console.log(map.get("a"));
// console.log(map.get(2));



// Loop

// const arr = [1, 2, 3];
// // for (let i = 0; i < arr.length; i++) console.log(arr[i]);
// for (const num of arr) console.log(num);


// if…else

//     const x = 10;
// if (x > 5) console.log("big");
// else console.log("small");

// // Ternary
// console.log(x > 5 ? "big" : "small"); // "big"


// Two Sum (Most Common Logic)  
// Given an array, find two numbers that equal target.

// const nums = [2, 7, 11, 15];
// const target = 9 ;

// const map = {}
// for (let i = 0 ; i< nums.length; i++){
//     const complete = target - nums[i];
//     console.log(complete)
//     if(map[complete]  !== undefined){
//         console.log([map[complete], i]);
//         return [map[complete], i];

//     }
//     map[nums[i]] = i;
// }


// console.log("No two sum solution", nums, target);



// Example 2: Contains paginations 
// Check if array has duplicate numbers

// const nums = [1, 2, 3, 1];
// const set = new Set();
// for (const num of nums) {
//     if (set.has(num)) return true;
//     set.add(num);
//     console.log(num);
// }
// return false;   



// paginations
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pageSize = 3;
const pageNumber = 2;
const startIndex = (pageNumber - 1) * pageSize;
const endIndex = startIndex + pageSize;
const page = items.slice(startIndex, endIndex);
console.log(page);


const itemsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pageSizeArray = 4;
const pageNumberArray = 3;
const startIndexArray = (pageNumberArray - 1) * pageSizeArray;
const endPAgeArray = startIndexArray + pageSizeArray;
const pageArray = (itemsArray.slice(startIndexArray, endPAgeArray));
console.log(pageArray);
