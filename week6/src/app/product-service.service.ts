import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import products from '../mock-data/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // list of functions: get products, set products, get product by id

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("https://67b980bb51192bd378dd9ad5.mockapi.io/products")
  }

  getProductById(id: string | number): Observable<Product> {
    return this.httpClient.get<Product>(`${id}`)
  }

}
