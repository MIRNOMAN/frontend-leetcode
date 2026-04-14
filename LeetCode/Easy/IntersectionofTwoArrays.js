// Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const set = new Set(nums1);
const result = new Set();
for (const num of nums2) {
  if (set.has(num)) {
    result.add(num);
  }
}
console.log(Array.from(result));