const findUniquePair = (arr: number[]) => {
  const pairMap = new Map<number, number>();

  for (const num of arr) {
    const occurencesCount = pairMap.get(num) ?? 0;
    pairMap.set(num, occurencesCount + 1);
  }

  return [...pairMap.keys()].filter(keyNum => pairMap.get(keyNum) === 2 )
};

//example:
const result = findUniquePair([1, 6, 2, 8, 2, 1, 9]);
console.log({ result });
