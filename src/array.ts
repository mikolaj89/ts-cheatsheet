export function createArray<T>(): T[] {
  return [];
}

//example:
// const emptyArray = createArray<string>();

export const findLargest = (arr: number[][]) => {
  return arr.map((item) => {
    const biggest = item.reduce((prev, current) => {
      return current > prev ? current : prev;
    }, 0);
    return biggest;
  });
};

//example

//   const myArr = [
//     [9, 20, 5],
//     [2, 7, 1],
//     [2, 7, 9],
//   ];
//   console.log("findLargest: ", findLargest(myArr)); // [20, 7, 9]
