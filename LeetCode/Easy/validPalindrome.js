// Valid Palindrome
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

const s = "A man, a plan, a canal: Panama";
const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
const reversed = cleaned.split("").reverse().join("");

console.log(cleaned === reversed);

