let s = "abcdeabc";

let lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let n = s.length;
  let len = 0;
  let obj = {};
  while (i < n && j < n) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
      i++;

      len = Math.max(len, i - j);
    } else {
      obj[s[j]] = 0;
      j++;
    }
  }
  return len;
};
console.log(lengthOfLongestSubstring(s));
