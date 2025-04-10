const lengthOfLongestRepeatedSubstring = (str: string): number => {
    let maxLength = 0;   // Stores the longest repeating character substring found
    let left = 0;        // Left pointer of the sliding window
  
    for (let right = 0; right < str.length; right++) {
      // If the character at 'right' is different from the character at 'left', slide the window
      if (str[right] !== str[left]) {
        // Update maxLength based on the size of the previous valid window
        maxLength = Math.max(maxLength, right - left);
        
        // Move 'left' pointer to the current position of 'right'
        left = right;
      }
    }
  
    // Check for the last substring
    maxLength = Math.max(maxLength, str.length - left);
  
    return maxLength;
  };

  console.log(lengthOfLongestRepeatedSubstring("aaaabbaaaaa"))