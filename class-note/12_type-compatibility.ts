// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// }

class Person {
  name: string;
}

let developer: Developer;
let person: Person;

// 'skill' 속성이 'Person' 형식에 없지만 'Developer' 형식에서 필수입니다.
// class 로 선언해도 마찬가지임
// developer = new Person;
