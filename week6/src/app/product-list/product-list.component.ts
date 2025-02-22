import { Component } from '@angular/core';
import { Product } from '../../interfaces/product'; // export { }
import products from '../../mock-data/products'; // default export
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList!: Product[]

  constructor(private productSerivce: ProductServiceService) {
    // this.productList = products
    // // for(let item in this.productList) // in object, of array
    this.productSerivce.getProducts().subscribe((elements) => {
      this.productList = elements
    })
  }
}
