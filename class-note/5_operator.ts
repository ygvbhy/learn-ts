function logMessage(value: string) {
  console.log(value);
}
logMessage("hello");
// logMessage(100); 100 은 number 값이라 string 값이 아니므로 선언 불가. 단, any 타입으로 바꾸면 선언 가능 한데 타입 장점이 사라짐

// 유니온 타입 - Union Type
// string 또는 number
let sego: string | number | boolean;
function logMessage1(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString(); // 이렇게 들어올 경우 타입이 number로 추론 해서 들어옴
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage1("hello");
logMessage1(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name;
  // someone.skill; 'Developer | Person' 형식에 'skill' 속성이 없습니다. 'Person' 형식에 'skill' 속성이 없습니다.ts(2339)
  // someone.age; 'Developer | Person' 형식에 'age' 속성이 없습니다. 'Developer' 형식에 'age' 속성이 없습니다.ts(2339
  // 유니온 타입으로 선언 하더라도 중복되는 값이 아니면 속성을 찾지 못함.
}
