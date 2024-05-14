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
// <div id="app">hi</div>;
// let div: HTMLDivElement | null
let div = document.querySelector("div");
// div 가 있다는 보장이 없기 때문에 타입이 유니온 타입으로 null 도 같이 옴
if (div) {
  // 이렇게 확인 해주고 해야 함
  // 아니면 아래 처럼 ? 를 써서 확인
  div?.innerHTML;
}

// 많이 사용하는 패턴
let span = document.querySelector("span") as HTMLSpanElement;
// 등등
