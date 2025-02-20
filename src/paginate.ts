export function paginate<T>(arr: T[], pageNo: number, pageSize: number): T[] {
  const pageStartIndex = pageSize * (pageNo - 1);

  // Throw error if page number is out of range
  if (pageStartIndex >= arr.length) {
    throw new Error(
      `For ${pageSize} items per page, page ${pageNo} doesn't exist (exceeds array size)`
    );
  }

  // Use slice for efficient pagination
  console.log("mathIn: ", Math.min(pageStartIndex + pageSize, arr.length));
  return arr.slice(
    pageStartIndex,
    Math.min(pageStartIndex + pageSize, arr.length)
  );
}

// example usage:

//   const pagedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const page = paginate(pagedNums, 2, 3);
