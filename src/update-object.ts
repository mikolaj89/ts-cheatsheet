
//shallow update
const updateObject = <T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): Readonly<T> => {
  return { ...obj, [key]: value };
};

//example:
// const user = { id: 1, name: "Alice", age: 25 };

// const updatedUser = updateObject(user, "age", 38);
// console.log("updatedUser: ", updatedUser);


//recursive approach
const deepUpdateObject = <T, K extends keyof T, U>(
  obj: T,
  keyPath: string,
  value: U
) => {
  const keyPathArr = keyPath.split(".");

  function getFieldsRecursively<U>(
    pathItems: string[],
    obj: U,
    index: number
  ): U {
    const currentFieldName = pathItems[index] as keyof U;
    const currentFieldValue = obj[currentFieldName];
    const nextIndex = index + 1;

    if (index === pathItems.length - 1) {
      return {...obj, [currentFieldName] : value };
    }

    return {
      ...obj,
      [currentFieldName]: getFieldsRecursively(
        pathItems,
        currentFieldValue,
        nextIndex
      ),
    };
  }

  return getFieldsRecursively(keyPathArr, obj, 0);
};

// alternative approach with reduceRight
const deepUpdateObjectReduce = <T, U>(obj: T, keyPath: string, value: unknown): T => {
    const keys = keyPath.split(".");
  
    return keys.reduceRight((acc, key, index) => {
      if (index === 0) {
        return { ...obj, [key]: acc }; // ✅ Merge updated value into original object
      }
  
      return { [key]: acc }; // ✅ Build new nested structure
    }, value) as T;
  };

const user = {
  id: 1,
  profile: {
    details: { name: "Alice", age: 25 },
  },
};

const updatedUser = deepUpdateObject(user, "profile.details.age", 30);
console.log("updatedUser: ", updatedUser);

// ✅ Expected Output:
//   {
//     id: 1,
//     profile: {
//       details: { name: "Alice", age: 30 }  // <- updated deeply
//     }
//   }
