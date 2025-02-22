type ProductCategory = 'phone' | 'tablet';

type Product = {
  id: number;
  title?: string; // optional
  price?: number; 
  imgUrl?: string;
  category: ProductCategory;
};

export type {
    Product,
    ProductCategory
}