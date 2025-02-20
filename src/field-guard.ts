type FieldGuardParams<T, K extends keyof T> = {
  obj: T;
  key: K;
  value: T[K];
};

export const fieldGuard = <T, K extends keyof T>({
  obj,
  key,
  value,
}: FieldGuardParams<T, K>) => {
  return { key, value };
};

// example:

// const myUser = {
//   id: 1,
//   name: "John",
//   email: "wiki@wp.pl",
// };

// fieldGuard({ obj: myUser, key: "id", value: "1212" });
