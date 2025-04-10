const lengthOfLongestRepeatedSubstring = (str: string) => {
  const arr = [...str];

  let currentSubstr = "";
  let previousLongestSubstr = "";

  for (let i = 0; i < arr.length; i++) {
    // const prev = arr[i - 1];
    const char = arr[i];

    if (currentSubstr[0] !== char) { //check it breaks the stake of repeated characters
        if(currentSubstr.length > previousLongestSubstr.length){ 
            previousLongestSubstr = currentSubstr; // update previousLongestSubstr if current is longer
        }
      
      currentSubstr = char; // we reset it anyway if steak is broken (no matter if we update old previousLongestSubstr or leave it)
    }else{
        currentSubstr += char; //if the same, we continue with appending
    }
  }
  console.log({currentSubstr, previousLongestSubstr})
  return Math.max(currentSubstr.length, previousLongestSubstr.length);
  
};



// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (substring: "abc")
console.log(lengthOfLongestRepeatedSubstring("aaadssdsbbbb")); // Output: 1 (substring: "b")
// lengthOfLongestSubstring("pwwkew"); // Output: 3 (substring: "wke")
// lengthOfLongestSubstring("");
