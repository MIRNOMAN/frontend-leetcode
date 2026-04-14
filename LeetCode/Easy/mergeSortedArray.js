// Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.



let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3; 
let nums2 = [2, 5, 6];
let n = 3; 


let i = m - 1;    
let j = n - 1;      
let k = m + n - 1;  


while (k >= 0) {
    if (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
    } else if (j >= 0) {
     
        nums1[k] = nums2[j];
        j--;
    }
    k--;
}

console.log(nums1);