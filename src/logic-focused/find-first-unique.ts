const findFirstUnique = (arr: string) => {
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

const result = findFirstUnique("abcabj");
console.log({ result });

