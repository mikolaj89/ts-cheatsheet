// Input: sentence = "TheQuickBrownFoxJumpsOverTheLazyDog"
// Output: true
// Explanation: The sentence contains at least one occurrence of every letter of the English alphabet either in lower or upper case.

const checkIfPangram = (str: string) => {
  const lowerCase = str.toLowerCase();
  const uniqueCharacters = new Set<string>();

  for (const char of lowerCase) {
    if (char >= 'a' && char <= 'z') {  // More efficient letter check
      uniqueCharacters.add(char);
    }
  }

  return uniqueCharacters.size === 26;
};
console.log(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"))
console.log(checkIfPangram("Jackdaws love my big sphinx of quartz"))
console.log(checkIfPangram("Hello world"))