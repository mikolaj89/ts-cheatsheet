export const filterObject = <T , K extends keyof T>(
  obj: T,
  keys: K[]
) => {
  const filteredObject  = {} as {[key in K] : T[key]};
  keys.forEach((arrayKey) => {

    filteredObject[arrayKey ] = obj[arrayKey];
  });

  return filteredObject;
};

// export const filterObject = <T, K extends keyof T>(
//     obj: T,
//     keys: K[]
//   ): Pick<T, K> => {
//     const filteredObject = {} as Pick<T, K>;
  
//     keys.forEach((arrayKey) => {
//       filteredObject[arrayKey] = obj[arrayKey]; // ✅ No `as string` needed
//     });
  
//     return filteredObject;
//   };

// const user = { id: 1, name: "Alice", age: 25, email: "alice@example.com" };

// export const filteredUser = filterObject(user, ["id", "name"]);
// ✅ filteredUser should be { id: 1, name: "Alice" }
