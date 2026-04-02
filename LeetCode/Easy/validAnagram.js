// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const s = "anagram";
const t = "nagaram";

const map = {};
for (const char of s) {
  map[char] = (map[char] || 0) + 1;
}

for (const char of t) {
  if (!map[char]) {
    console.log(false);
    return false;
  }
  map[char]--;
}

console.log(true);
return true;