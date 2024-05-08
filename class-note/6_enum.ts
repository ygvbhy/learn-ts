// 이넘은 특정 값들의 집합을 의미하는 자료형.
// 숫자형 이넘
// Nike 에 10 이란 값을 입력 하면
// Adidas 는 11이란 값이 생성 됨
// 숫자형일 경우 1씩 증가 하는 집합
enum Shoes {
  Nike = 10,
  Adidas,
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 10

// 문자형 이넘
enum stringShoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

let stringMyShoes = stringShoes.Nike;
console.log(stringMyShoes); // 나이키
