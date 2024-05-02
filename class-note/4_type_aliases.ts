// interface 로 정의 했을때는 interface의 명칭만 나옴
// interface Person {
//   name: string;
//   age: number;
// }

// type 로 정의 했을때는 마우스 올리면 해당 타입에 대한 상세 정보까지 표기 됨
type Person = {
  name: string;
  age: number;
}

let seho: Person = {
  name: '세호',
  age: 30
}

type MyString = string
let str: MyString = 'hello'

type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo) {

}