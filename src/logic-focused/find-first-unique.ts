const findFirstUnique = (arr: number[]) => {
  const uniqueItems = new Set();
  const repeatedItems = new Set();

  for (const num of arr) {
    const isNotInRepeatedItems = !repeatedItems.has(num);

    if (isNotInRepeatedItems) {
      if (!uniqueItems.has(num)) {
        uniqueItems.add(num);
      } else {
        uniqueItems.delete(num);
        repeatedItems.add(num);
      }
    }
  }
  const uniqueItemsArr = [...uniqueItems.values()];
  return uniqueItemsArr[0] ?? null
};

const result = findFirstUnique([1,3, 1, 5, 20, 50, 3, 7, 666]);
console.log({ result });
// Expected output: 1 (because 1 is the first element that appears only once)
