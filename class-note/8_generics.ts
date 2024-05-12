function logTest(text) {
  console.log(text);
  return text;
}

logTest(10); // 숫자 10
logTest("하이"); // 문자열 '하이'
logTest(true); // 진위값 true

function text<T>(text: T): T {
  console.log(text);
  return text;
}
text<string>("hi");
