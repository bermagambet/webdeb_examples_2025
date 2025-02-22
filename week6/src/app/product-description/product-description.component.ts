import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import products from '../../mock-data/products';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-description',
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css'
})
export class ProductDescriptionComponent {
  product!: Product;

  // which product it is -> ID in our URL
  constructor(route: ActivatedRoute, productService: ProductServiceService) {
    // Observable -> we will wait for updates
    route.paramMap.subscribe((params) => { // api.get(id).then()/subscribe()
      // new Map() - get("key")/set("key", "value")
      const id = Number(params.get("id"))
      productService.getProductById(id).subscribe((elemnent) => {
        this.product = elemnent
      })
      // this.product = products.find((el) => el.id === id) ?? { id: 0, category: "phone" }
    })
  }
}
