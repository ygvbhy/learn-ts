// ES5 - 함수 선언문
function sum(a, b) {
  return a + b;
}

// ES5 - 함수 표현식
const sum = function(a, b) {
  return a + b
}

// ES6+ - 함수 표현식 (화살표 함수)
const sum = (a, b) => {
  return a + b;
}
const sum = (a, b) => a + b;

// 타입 스크립트 - 화살표 함수 
const sum = (a: number, b: number) : number => {
  return a + b;
}
