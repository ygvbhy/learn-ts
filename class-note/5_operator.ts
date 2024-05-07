function logMessage(value: string) {
  console.log(value);
}
logMessage("hello");
// logMessage(100); 100 은 number 값이라 string 값이 아니므로 선언 불가. 단, any 타입으로 바꾸면 선언 가능 한데 타입 장점이 사라짐

// 유니온 타입 - Union Type
// string 또는 number
function logMessage1(value: string | number) {
  console.log(value);
}
logMessage1("hello");
