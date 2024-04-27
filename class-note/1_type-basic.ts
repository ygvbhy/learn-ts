// JS 문자열 선언
const strJs = "hello";

// TS 문자열 선언
const strTs: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk"];
let items: number[] = [1, 2, 3];

// TS 튜플 - 배열의 인덱스에 각각의 타입이 정해져 있다.
let address: [string, number] = ["강남", 123];

// TS 객체
let obj: object = {};
let persion: object = {
  name: "capt",
  age: 100,
};
let newPersion: { name: string; age: number } = {
  name: "Thor",
  age: 1000,
};

// TS 진위값
let show: boolean = true;
