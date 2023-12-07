// 1. 문자 / 숫자 / boolean (primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive("철수", 123, true);

// 2. any 타입
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const resultAny = getAny("철수", 123, true);

// 3. Unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const resultUnknown = getUnknown("철수", 123, true);

// 4. Generic 타입
function getGeneric<Mytype1, Mytype2, Mytype3>(arg1: Mytype1, arg2: Mytype2, arg3: Mytype3): [Mytype3, Mytype2, Mytype1] {
  return [arg3, arg2, arg1];
}
const resultGeneric = getGeneric<string, number, boolean>("철수", 123, true);
