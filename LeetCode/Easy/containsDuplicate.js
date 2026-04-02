// contains duplicate
// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

const nums = [1, 2, 3, 1];
const set = new Set();
for (const num of nums) {
  if (set.has(num)) {
    console.log(true);
    return true;
  }
  set.add(num);
}
console.log(false);
return false;
