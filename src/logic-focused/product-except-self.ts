const productExceptSelf = (arr: number[]) => {
  const output = new Array(arr.length).fill(1);
  let leftProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    if (i >= 1) {
      leftProduct = arr[i - 1] * leftProduct;
    }
    output[i] = leftProduct;
  }

  let rightProduct = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i <= arr.length - 2) {
      rightProduct = arr[i + 1] * rightProduct;
    }
    output[i] = output[i] * rightProduct;
  }
  return output;
};

const result = productExceptSelf([2, 3, 3, 4]);
console.log({ result });
// Expected output: [24, 12, 8, 6]
// Explanation:
// [2 * 3 * 4, 1 * 3 * 4, 1 * 2 * 4, 1 * 2 * 3] = [24, 12, 8, 6]
