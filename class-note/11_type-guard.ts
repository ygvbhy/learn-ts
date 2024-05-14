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
