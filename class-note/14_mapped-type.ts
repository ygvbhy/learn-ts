type Heroes = 'hulk' | 'Capt' | 'Thor'
type HeroesAge = {
  [K in Heroes]: number
}
const ages: HeroesAge = {
  hulk: 33,
  Capt: 100,
  Thor: 1000
}

// for in 반복문 코드
let arr = ['a', 'b', 'c']
for (let key in arr) {
  console.log(key); // hulk | Capt | Thor
  
}