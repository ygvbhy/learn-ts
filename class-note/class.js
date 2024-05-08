function Person(name, age) {
  this.name = name;
  this.age = age;
}
let capt = new Person("capt", 100);

// 위의 코드와 아래의 코드는 완벽하게 동일한 코드임
// 위의 코드가 ES2015 이전의 코드
// 아래의 코드가 ES2015 이후의 코드

class Person {
  // 클래스 로직
  constructor() {
    console.log("생성되었습니다.");
  }
}

new Person(); // 생성되었습니다. 출력

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let seho = new Person1("세호", 30);
console.log(seho);
