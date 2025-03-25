//1.
// The function should return two numbers from the array whose sum is the highest possible. This means:

// We are looking for a pair of numbers, not necessarily the largest number itself.
// The sum should be maximized using any two numbers from the array.
// The numbers don’t have to be adjacent or follow a specific pattern—just the pair that gives the highest sum.

export const sumMaxPair = (arr: number[]): [number, number] => {
  if (arr.length < 2) throw new Error("Array must have at least two numbers");

  let first = -Infinity,
    second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current > first) {
      second = first;
      first = current;
    } else if (current > second) {
      second = current;
    }
  }

  return [first, second];
};


export const rateLimit = (cb: () => void, limit: number, interval: number) => {
    let counter = Date.now();
    let callsNumber = 0;

    return (title: string) => {
        // Reset if interval has passed
        if (Date.now() - counter > interval) {
            counter = Date.now();
            callsNumber = 0;
        }

        // Allow execution if under limit
        else if (callsNumber < limit) {
            console.log("call title: ", title);
            cb();
            callsNumber++;
        }
    };
};
