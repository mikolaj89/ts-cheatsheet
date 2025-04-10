// solution i came up with by myself - brute force
const lengthOfLongestSubstring = (str: string) => {
    let currentLongestSubstr = "";
    let previousLongestSubstr = "";
  
    for (let i = 0; i < str.length; i++) {
      if (currentLongestSubstr.includes(str[i])) {
        if (currentLongestSubstr.length > previousLongestSubstr.length) {
          previousLongestSubstr = currentLongestSubstr;
        }
        if (str[i - 1] === str[i]) {
          currentLongestSubstr = str[i];
        } else {
          currentLongestSubstr = str[i - 1] + str[i];
        }
      } else {
        currentLongestSubstr += str[i];
      }
    }
  
    return Math.max(currentLongestSubstr.length, previousLongestSubstr.length);
};

// // Challenging Test Scenarios
// const challengingTestCases = [
//     // Strings with complex repeat patterns
//     "abcdefghijklmnopqrstuvwxyzz",  // Long string with repeated last character
//     "aabcbcdbca",                   // Overlapping unique substrings
//     "aabacbaa",                     // Multiple repeat scenarios
    
//     // Unusual character combinations
//     "   ",                          // Multiple space characters
//     "!@#!@#!@#",                    // Repeated special characters
//     "aA1aA1aA1",                    // Mixed case and numbers
    
//     // Boundary condition scenarios
//     "aa",                           // Minimum repeat case
//     "aaabbbccc",                    // Alternating repeated characters
//     "abcdefghijklmnopqrstuvwxyz",   // No repeats
    
//     // Unicode and special character scenarios
//     "áéíóúaeiou",                   // Accented characters
//     "🌍🌎🌏🌍",                      // Emoji characters
//     "한국어테스트",                   // Non-Latin script
// ];

// console.log("Challenging Test Cases Results:");
// challengingTestCases.forEach(testCase => {
//     console.log(`"${testCase}": ${lengthOfLongestSubstring(testCase)}`);
// });
