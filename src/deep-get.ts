//can be solved better, using .reduce() method
function deepGet<T, K extends string>(obj: T, path: K) {
  const fieldsTreeItems = path.split(".");

  function getFieldsRecursively<U>(pathItems: string[], obj: U, index: number) {
    const currentFieldName = pathItems[index] as keyof U;

    const currentFieldValue = obj[currentFieldName];

    if (index === pathItems.length - 1) {
      return currentFieldValue as Pick<U, typeof currentFieldName>;
    }
    const nextIndex = index + 1;

    return getFieldsRecursively(pathItems, currentFieldValue, nextIndex);
  }

  return getFieldsRecursively(fieldsTreeItems, obj, 0);
}

// example

// const user10 = {
//     id: 1,
//     profile: {
//       details: { name: "Alice", age: 25 },
//     },
//   };

//   const userName10 = deepGet(user10, "profile.details.name");