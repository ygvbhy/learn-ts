// https://joshua1988.github.io/ts/guide/type-alias.html#%ED%83%80%EC%9E%85-%EB%B3%84%EC%B9%AD%EC%9D%98-%ED%8A%B9%EC%A7%95

// interface 로 정의 했을때는 interface의 명칭만 나옴
// interface Person {
//   name: string;
//   age: number;
// }

// type 로 정의 했을때는 마우스 올리면 해당 타입에 대한 상세 정보까지 표기 됨
// 단 type 은 확장이 불가능함. 그래서 interface 로 작성하는걸 추천함.
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