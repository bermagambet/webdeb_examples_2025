import { Product } from "../interfaces/product";

const products: Array<Product> = [
  {
    id: 1,
    title: 'Iphone 16',
    price: 1000,
    imgUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
    category: 'phone',
  },
  {
    id: 2,
    title: 'Iphone 15',
    price: 800,
    imgUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
    category: 'phone',
  },
  {
    id: 3,
    title: 'Ipad',
    price: 500,
    imgUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
    category: 'tablet',
  },
];

export default products;
