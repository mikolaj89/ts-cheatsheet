

// const user = { id: 1, name: "Alice", age: 25, email: "alice@example.com" };

import { rateLimit } from "./src/gpt-inteview-tasks.ts";

// interface User {
//     id: number;
//     name: string;
//     role: "admin" | "user";
//     age : number
//   }
  

// export const filteredUser = filterObject(user, ["id", "name"]);

// console.log('filteredUser: ',filteredUser);



// const users : User[] = [
//     { id: 1, name: "Alice", role: "admin", age: 30  },
//     { id: 2, name: "Bob", role: "user", age: 30, },
//     { id: 3, name: "Charlie", role: "admin", age: 20 },
//   ];
  
//   const groupedUsers = groupBy(users, "id");
//   console.log('groupedUsers: ',groupedUsers);

// console.log('sorted: ',sumMaxPair2([1]));

const limitedFn = rateLimit(console.log, 2, 1000);

limitedFn("Call 1"); // ✅ Allowed
limitedFn("Call 2"); // ✅ Allowed
limitedFn("Call 3"); // ❌ Ignored (limit reached)

setTimeout(() => {
  limitedFn("Call 4"); // ✅ Allowed (after interval resets)
}, 1100);