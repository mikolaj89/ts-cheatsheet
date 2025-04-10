//"pro" approach - sliding window
// const lengthOfLngestUniqueSubstr = (str: string): number => {
//     const seenChars = new Map<string, number>();
//     let maxLength = 0;
//     let left = 0;
  
//     for (let right = 0; right < str.length; right++) {
//       const currentChar = str[right];
  
//       console.log(`\n\x1b[33mStep ${right + 1}:\x1b[0m`);
//       console.log(`\x1b[34m- Right pointer is at index ${right} (Character: '${currentChar}')\x1b[0m`);
//       console.log(`\x1b[32m- Current window: '${str.slice(left, right + 1)}'\x1b[0m`);
  
//       if (seenChars.has(currentChar) && seenChars.get(currentChar)! >= left) {
//         console.log(`\x1b[31m  - Duplicate '${currentChar}' found at index ${right}.\x1b[0m`);
//         console.log(`\x1b[31m  - Previous index of '${currentChar}': ${seenChars.get(currentChar)}\x1b[0m`);
        
//         left = seenChars.get(currentChar)! + 1;
//         console.log(`\x1b[31m  - Updated 'left' pointer to index ${left}.\x1b[0m`);
//       }
  
//       seenChars.set(currentChar, right);
//       maxLength = Math.max(maxLength, right - left + 1);
  
//       console.log(`\x1b[35m  - Updated 'seenChars' Map:\x1b[0m`, seenChars);
//       console.log(`\x1b[32m  - Current maxLength: ${maxLength}\x1b[0m`);
//     }
  
//     return maxLength;
//   };

  const lengthOfLongestSubstringWithVisualisation = (str: string): number => {
    const seenChars = new Map<string, number>();
    let maxLength = 0;
    let left = 0;
  
    console.log("\n\x1b[33mVisualizing Sliding Window Movement:\x1b[0m");
  
    for (let right = 0; right < str.length; right++) {
      const currentChar = str[right];
  
      // Check if the character is duplicated and within the current window
      if (seenChars.has(currentChar) && seenChars.get(currentChar)! >= left) {
        left = seenChars.get(currentChar)! + 1; // Move left pointer to skip the duplicate
      }
  
      // Update the position of the current character
      seenChars.set(currentChar, right);
  
      // Update the maxLength if we found a longer substring
      maxLength = Math.max(maxLength, right - left + 1);
  
      // Visualization of the window
      console.log(
        `\x1b[32m${str.substring(0, left)}\x1b[0m` + 
        `\x1b[41m${str.substring(left, right + 1)}\x1b[0m` + 
        `\x1b[37m${str.substring(right + 1)}\x1b[0m` + 
        `  (Current Window: '${str.substring(left, right + 1)}', maxLength: ${maxLength})`
      );
    }
  
    console.log(`\n\x1b[33mFinal maxLength: ${maxLength}\x1b[0m`);
    return maxLength;
  };
  
//   console.log('\nResult:', lengthOfLngestUniqueSubstr("pwwkew"));
  
  console.log('Result:', lengthOfLongestSubstringWithVisualisation("pwwkew"));