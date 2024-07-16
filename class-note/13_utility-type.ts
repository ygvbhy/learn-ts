interface Product {
  id: number,
  name: string,
  price: number,
  brand: string,
  stock: number
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ..
}

// interface ProductDetail {
//   id: number, 
//   name: string, 
//   price: number
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// Product 에서 id 와 name, price 의 타입을 가져온다.
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수

// 업데이트 상품을 다 옵셔널로 바꿔서 사용
interface UpdateProduct {
  id?: number,
  name?: string,
  price?: number,
  brand?: string,
  stock?: number
}
type updateProduct1 = Partial<Product>
// 이 타입과 위의 타입은 같은 효과를 나타냄
function updateProductItem(productItem: UpdateProduct) {

}