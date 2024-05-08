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

let capt: string & number & boolean; // 스트링, 넘버, 불린 값을 다 만족 하는 값이라 capt 은 never 값이 온다.

function askSomeone1(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
  // Developer 와 person 의 모든 값이 다 포함된 타입 값임
}

askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "캡틴", age: 100 });
// 인자가 developer 나 person 값을 넣어도 만족 함

askSomeone1({ name: "헐크", skill: "변신", age: 100 });
// 인자가 developer 와 person 값을 모두 넣어야 만족함
