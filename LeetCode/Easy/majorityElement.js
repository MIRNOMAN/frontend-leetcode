// Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.   You may assume that the majority element always exists in the array.

const nums = [2, 2, 1, 1, 1, 2, 2];

function majorityElement(nums) {
  let candidate = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement(nums));
