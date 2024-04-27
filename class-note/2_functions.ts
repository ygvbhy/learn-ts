// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
// 가장 기본적인 방식
function newSum(a: number, b: number): number {
  return a + b;
}

// 지정한 인자보다 많거나 적을경우 ts에서 경고 문구
// 지정한 타입과 다른 인자를 넣을 경우 ts 에서 경고
sum(10, 20);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log("hello world");
log("hello ts", "abc");
