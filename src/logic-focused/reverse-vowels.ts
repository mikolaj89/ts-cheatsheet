const reverseVowels = (str: string) => {
  const vowels = new Set("aoeiuyAOEIUY");
  const chars = str.split("");
  const invertedVowelsInStr: string[] = [];

  // Collect vowels
  for (const char of chars) {
    if (vowels.has(char)) {
      invertedVowelsInStr.push(char);
    }
  }

  // Replace vowels in the original string with inverted ones
  for (let i = 0; i < chars.length; i++) {
    if (vowels.has(chars[i])) {
      chars[i] = invertedVowelsInStr.pop()!; // Using .pop() instead of .shift()
    }
  }

  return chars.join("");
};

const reverseVowelsWithPointers = (str: string) => {
    const vowels = "aoeiuy";
    const chars = str.split("");
    let left = 0;
    let right = chars.length - 1;
  
    while (left < right) {
      if (!vowels.includes(chars[left].toLowerCase())) {
        left++;
      } else if (!vowels.includes(chars[right].toLowerCase())) {
        right--;
      } else {
        // Swap vowels
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
      }
    }
  
    return chars.join("");
  };
  

console.log(reverseVowels("DesignGUrus"));

// Input: s= "hello"
// Output: "holle"
