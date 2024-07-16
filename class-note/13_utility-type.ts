interface Product {
  id: number,
  name: string,
  price: number,
  brand: string,
  stock: number
}

// 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
  // ..
// }

// interface ProductDetail {
//   id: number, 
//   name: string, 
//   price: number
// }

// Product 에서 id 와 name, price 의 타입을 가져온다.
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}