// TS tasks

//1.

type ReturnType<T> = T extends number ? number : string;

const identityWidened = <T>(value: T): ReturnType<T> => {
  return value as ReturnType<T>;
};

const num = identityWidened(42); // num is `number`
const str = identityWidened("hello"); // str is `string`

//2.

const reverseArray = <T>(value: T[]) => {
  return value.reverse();
};

const numbers = reverseArray([1, 2, 3]); // numbers should be number[]
const words = reverseArray(["a", "b", "c"]); // words should be string[]
const objects = reverseArray([{ id: 1 }, { id: 2 }]); // objects should be { id: number }[]

//3.

const getValue = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const user = { id: 1, name: "Alice", email: "alice@example.com" };

const userId = getValue(user, "id"); // userId should be number
const userName = getValue(user, "name"); // userName should be string

// const invalidKey = getValue(user, "unknown"); // ❌ Should cause a TypeScript error

//4.

const mergeObjects = <T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U => {
  return { ...obj1, ...obj2 };
};

const myUser = { id: 1, name: "Alice" };
const details = { age: 30, email: "alice@example.com" };

const merged = mergeObjects(myUser, details);
// ✅ merged should be of type: { id: number; name: string; age: number; email: string }

// const invalid = mergeObjects(myUser, "hello");
// ❌ Should cause a TypeScript error (second argument must be an object)

//4.

const filterArray = <T>(arr: T[], cb: (arg: T) => boolean) => {
  return arr.filter(cb);
};

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers2, (num) => num % 2 === 0);
// ✅ evenNumbers should be of type number[] with value [2, 4]

const words2 = ["hello", "world", "hi"];
const shortWords = filterArray(words2, (word) => word.length < 4);
// ✅ shortWords should be of type string[] with value ["hi"]

//5.

const wrapPromise = <T>(value: T) => {
  return new Promise<T>((resolve) => {
    return resolve(value);
  });
};

const numPromise = wrapPromise(42);
// ✅ numPromise should be Promise<number>

const strPromise = wrapPromise("hello");
// ✅ strPromise should be Promise<string>

numPromise.then((value) => console.log(value)); // ✅ 42

//6.

const swapTuple = <T, U>(tuple: [T, U]): [U, T] => {
  return [tuple[1], tuple[0]];
};

const swapped1 = swapTuple([1, "Alice"]);
// ✅ swapped1 should be [string, number]

const swapped3 = swapTuple([1, "hello"]);

const removeDuplicates = <T>(arr: T[]) => {
  const deDuped = arr.reduce<T[]>((acc, current) => {
    if (!acc.includes(current)) {
      acc.push(current);
    }
    return acc;
  }, []);

  return deDuped;
};

const removedDups1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// ✅ numbers should be [1, 2, 3, 4, 5]

const removedDups2 = removeDuplicates(["apple", "banana", "apple", "orange"]);
// ✅ words should be ["apple", "banana", "orange"]

// 9. Rename property

function renameProperty<T, K extends keyof T, U extends string>(
  obj: T,
  key: K,
  newKey: U
): Omit<T, K> & { [P in U]: T[K] } {
  const fieldValue = obj[key];
  const { [key]: _, ...rest } = obj; // Remove old key

  return { ...rest, [newKey]: fieldValue } as Omit<T, K> & { [P in U]: T[K] };
}

const user9 = { id: 1, name: "Alice", age: 25 };

const renamedUser = renameProperty(user, "name", "fullName");
