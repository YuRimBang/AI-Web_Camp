let nullVariable = null;
console.log(nullVariable); // null
console.log(typeof nullVariable); // "object"

let undefinedVariable;
console.log(undefinedVariable); // undefined
console.log(typeof undefinedVariable); // "undefined"

//변수에 null을 할당한 경우
let a = null;
if (variable1 === null) {
  console.log("variable1 is null");
} else {
  console.log("variable1 is not null");
}

//변수에 값을 할당하지 않은 경우 확인
let b;
if (variable2 === undefined) {
  console.log("variable2 is undefined");
} else {
  console.log("variable2 is not undefined");
}
