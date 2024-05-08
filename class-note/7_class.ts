class Person {
  private name: string; // 해당 클래스 에서만 사용
  public age: number; // 전역 사용 가능
  readonly log: string; // 읽기만 가능 변경 불가

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
