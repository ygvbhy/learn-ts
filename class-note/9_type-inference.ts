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

// 타입 추론 기본 3
interface Dropdown1<T> {
  value: T;
  title: string;
}
// Dropdown1 의 타입을 상속 받아서 DetailedDripdown 로 들어온 제네릭 K 값이 Dropdown1 의 제네릭 T가 K 값으로 들어감
interface DetailedDripdown<K> extends Dropdown1<K> {
  description: string;
  tag: K;
}

// string 을 넣어서 위의 K, T 인 제네릭 값은 string 으로 설정 됨
let detailedItem: DetailedDripdown<string> = {
  title: "abc",
  description: "ab",
  value: "a",
  tag: "a",
};
