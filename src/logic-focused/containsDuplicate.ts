// const containsDuplicate = (arr: number[]) => {
//   const occurences = new Set<number>();

//   for (const num of arr) {
//     if (occurences.has(num)) {
//       return true;
//     }

//     occurences.add(num);
//   }

//   return false;
// };

const containsDuplicate = (arr: number[]) => {
  
    const occurences = new Map<number, number>();
  
    for (const num of arr) {
      console.log("occurences: ", occurences);
      console.log(occurences.get(num));
      if (occurences.get(num) !== undefined && occurences.get(num)  > 1) {
        console.log("found ?");
        return true;
      } else {
        const numCount = occurences.get(num) || 0;
        occurences.set(num, numCount + 1);
      }
    }
    
    return false;
  };

console.log(containsDuplicate([2, 2, 7, 1, 6]));
