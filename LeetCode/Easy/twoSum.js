// Given an array, find two numbers that equal target.

const nums = [2, 7, 11, 15];
const target = 9;

const map = {};
for (let i = 0; i < nums.length; i++) {
  const complete = target - nums[i];
  if (map[complete] !== undefined) {
    console.log([map[complete], i]);
    return [map[complete], i];
  }
  map[nums[i]] = i;
}

console.log("No two sum solution", nums, target);
