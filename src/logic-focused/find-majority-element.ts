const findMajorityElement = (arr: number[]) => {
  const majorityTreshold = arr.length / 2;
  const itemsOccurentesMap = new Map<number, number>();

  
    for (const num of arr) {
      const occurencesNumber = itemsOccurentesMap.get(num) ?? 0;
      const incrementedOcurencesNumber = occurencesNumber + 1;
      if (incrementedOcurencesNumber > majorityTreshold) {
        return num;
      }
      itemsOccurentesMap.set(num, incrementedOcurencesNumber);
    }
  

  return  null;
};

const result = findMajorityElement([3, 3, 2, 3, 3, 3, 2, 4, 3, 2, 2, 2, 2, 2]);
console.log({ result });

// Expected output: 3
