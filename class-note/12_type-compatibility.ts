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

// 함수
let add = function (a: number) {
  // ...
};

let sum = function (a: number, b: number) {
  // ...
};
// 파라미터 한개의 차이
// sum 이 add 함수 보다 큼
sum = add; // 호환 가능
// add = sum; // 호환 불가능 add 함수의 구조가 sum 의 구조보다 작아서 포함이 되지 않음.

// 제네릭
interface Empty<T> {
  // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;

// 선언 가능
// 추가 업데이트로 인해 값이 정해지지 않아서 오류가 나는데 무시 하고 볼떄 선언 가능
// empty1 = empty2
// empty2 = empty1

interface NotEmpty<T> {
  data: T;
}

// 동일 하지만 타입의 차이가 생김
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

// notEmpty1 = notEmpty2
