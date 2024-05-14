// 기본적으로 any 로 설정 됨
let a;

// function getB(b?: number): string
// 타입을 추론 하여 결과 값이 어떻게 나올지 예측함
function getB(b = 10) {
  let c = "hi";
  return b + c;
}
