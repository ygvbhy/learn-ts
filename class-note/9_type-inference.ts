// 타입 추론 기본 1
// 기본적으로 any 로 설정 됨
let a;

// function getB(b?: number): string
// 타입을 추론 하여 결과 값이 어떻게 나올지 예측함
function getB(b = 10) {
  let c = "hi";
  return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}
let shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "hello",
};

// 궁금 한거 테스트 용
interface Test<T> {
  value: T;
  name: T;
}

const User: Test<number | string> = {
  value: 10,
  name: "Cap",
};
