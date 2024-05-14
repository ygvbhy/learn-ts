// 타입 단언 (type assertion)
let a;
a = 20;
a = "a";
// let b = a;
// a 는 초기 any 로 추정을 하기 때문에 any 가 b의 타입이 된다.
// a as string 을 넣으면 타입 단언이 된다.
let b = a as string;
// ts 가 추론 한 거 말고 개발자가 직접 b 의 타입은 string 이다 라고 선언을 해주는 것

// DOM API 조작 할때 자주 사용함
