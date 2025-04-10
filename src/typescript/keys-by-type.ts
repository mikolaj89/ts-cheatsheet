interface User {
  id: number;
  name: string;
  age?: number;
  email?: string;
  isActive: boolean;
  tags?: string[];
}

type KeysByType<T, U> = {
  [K in keyof T]: Exclude<T[K], undefined> extends U ? K : never;
}[keyof T] extends infer R ? Extract<R, string | number | symbol> : never;


type StringKeys = KeysByType<User, string>; 
// Result: "name" | "email"

type NumberKeys = KeysByType<User, number>; 
// Result: "id" | "age"

type BooleanKeys = KeysByType<User, boolean>; 
// Result: "isActive"
