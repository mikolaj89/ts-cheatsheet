export const groupBy = <T, K extends keyof T>(
  objArr: T[],
  groupByKey: K
) => {
  const result = objArr.reduce((acc, current) => {
    const keyValueAsGroup = current[groupByKey] as T[K] & PropertyKey;

    acc[keyValueAsGroup] =
      acc[keyValueAsGroup] === undefined
        ? [current]
        : [...acc[keyValueAsGroup], current];
    return acc;
  }, {} as {[key in T[K] & PropertyKey]  : T[]});

  return result;
};

// ✅ Expected Output:
//   {
//     admin: [
//       { id: 1, name: "Alice", role: "admin" },
//       { id: 3, name: "Charlie", role: "admin" }
//     ],
//     user: [{ id: 2, name: "Bob", role: "user" }]
//   }
