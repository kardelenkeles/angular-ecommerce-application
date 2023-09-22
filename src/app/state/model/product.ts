export interface Product {

  id: number;

  productName: string;

  details: string;
  category: string;
  //
  // productImage: string;

  price: number;

  discount: number;

}

export interface UpdateProduct{
  id: number;

  productName: string;

  details: string;
  category: string;

  // productImage: string;

  price: number;

  discount: number;
}
