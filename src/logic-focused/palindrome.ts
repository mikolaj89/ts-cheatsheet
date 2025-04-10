const checkIfPalindrome = (str: string) => {
  function isAlphanumeric(char: string) {
    return /^[a-zA-Z0-9]$/.test(char);
  }

  let left = 0;
  let right = str.length - 1;
  const lowerCaseStr = str.toLowerCase();
  while (left < right) {
    if (lowerCaseStr[left] === lowerCaseStr[right]) {

      right--;
      left++;
    } else if (!isAlphanumeric(lowerCaseStr[left])) {
      left++;
    } else if (!isAlphanumeric(lowerCaseStr[right])) {
      right--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(checkIfPalindrome("dudud"));
