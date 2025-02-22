import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
   @Input() product: Product
   constructor() {
    this.product = {
      id: 0,
      category: "phone"
    }
   }
}
