interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tom", age: 33, skill: "Iron Making" };
}

let tony = introduce();
// skill 값이 없다고 오류 남
// console.log(tony.skill);

// 타입 단언 해서 skill 정보 찾기
// 이럻게 하면 코드가 너무 더러워서 줄여야 함
// 이때 쓰는게 타입 가드임
if ((tony as Developer).skill) {
  let skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  let age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
// Developer 에 대한 타입 정의
// 반환 타입의 is 가 핵심 문법임
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

// 위의 함수를 통과 했다면 Developer 이므로 타입 추론
// 통과 못했다면 Person 의 타입 이므로 age 접근 가능
if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
