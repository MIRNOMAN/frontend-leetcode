// Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const nums = [0, 1, 0, 3, 12];
let index = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    nums[index] = nums[i];
    index++;
  }
}

while (index < nums.length) {
  nums[index] = 0;
  index++;
}

console.log(nums);