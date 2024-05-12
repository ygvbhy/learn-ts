function logTest(text) {
  console.log(text);
  return text;
}

logTest(10); // 숫자 10
logTest("하이"); // 문자열 '하이'
logTest(true); // 진위값 true

function text<T>(text: T): T {
  console.log(text);
  return text;
}
text<string>("hi");

function log(text: string) {
  console.log(text);
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}
// 위의 두개의 함수는 같은 로직이지만 타입별로 따로 선언 되어 있기 떄문에 유지보수 할때 힘듬

function logText1(text: string | number) {
  console.log(text);
  return text;
}

const a = logText1("a");
// 유니온 타입으로 문자열과 숫자의 타입을 받을 수 있어졌으나 반환값에 대한 타입 설정이 잘못되어 있으므로 문제가 생김
logText1(10);

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText2<string>("abc");
str.split("");
const login = logText2<boolean>(true);

logText2(10);

// 인터페이스에 제네릭 선언 방법
// 일반적인 선언
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = { value: "abc", selected: false };

// 제네릭 선언 방법
interface Dropdown1<T> {
  value: T;
  selected: boolean;
}

const obj1: Dropdown1<string> = { value: "", selected: false };
