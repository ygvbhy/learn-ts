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
