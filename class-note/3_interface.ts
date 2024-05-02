interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let sego: User = {
  age: 19, 
  name: '세호'
}

// 함수의 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 100
}

getUser(capt)