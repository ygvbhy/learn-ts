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

// 예제
function askQuestion(answer: string) {
  if (answer === "yes") {
    console.log("정답입니다.");
  }
  if (answer === "no") {
    console.log("오답입니다.");
  }
}
askQuestion("yes");
askQuestion("y");
askQuestion("예스");
askQuestion("Yes");
// 위의 예제는 아래의 함수 호출 처럼 answer 의 값이 저런식으로 나뉠 수 있음

enum Answer {
  Yes = "Y",
  No = "N",
}
function askQuestion1(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
askQuestion1("yes");
askQuestion1("y");
askQuestion1("예스");
askQuestion1("Yes");
askQuestion1(Answer.Yes);
// 이넘에서 제공되는 값만 넘길 수 있음
// 드롭다운이나 어떤 목록 같은거에서 사용하면 이슈가 줄어들 거라 예상함
