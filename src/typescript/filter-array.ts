//1. filters passed array to return only items when given property is not null nor undefined
// 2. enforces to allow only one of keys that exist in  T
//3. change type to NonNullable for for prop that we filter by (since we can be sure it has some thruthy value in function result)


interface User {
    id: number;
    name?: string;
    age?: number;
  }
  
  const users: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, age: 30 },
    { id: 3, name: "Bob", age: 40 },
    { id: 4, name: null },
    {id: 5, name: "ziutek"}
  ];

  const filterByProperty = <T, K extends keyof T>(
    arr: T[],
    key: K
  ): (Omit<T, K> & { [P in K]-?: NonNullable<T[P]> })[] => { 
    const result = arr.filter(
      item => item[key] !== null && item[key] !== undefined
    ) as (Omit<T, K> & { [P in K]-?: NonNullable<T[P]> })[];
  
    return result;
  };
// similar, but accepts array as props to filter non-nullables by
  const filterByProperties = <T, K extends keyof T>(
    arr: T[],
    keys: K[]
  ): (Omit<T, K> & { [P in K]-?: NonNullable<T[P]> })[] => {
    const result = arr.filter(item =>
      keys.every(key => item[key] !== null && item[key] !== undefined)
    ) as (Omit<T, K> & { [P in K]-?: NonNullable<T[P]> })[];
  
    return result;
  };
  const filteredUsers = filterByProperty(users, "name");
  const filteredUsers2 = filterByProperties(users, ["name", "age"]);
  
  
  // Result: [{ id: 1, name: "Alice", age: 25 }, { id: 3, name: "Bob", age: 40 }]
  console.log('filteredUsers: ',filteredUsers);
  console.log('filteredUsers2: ',filteredUsers2);