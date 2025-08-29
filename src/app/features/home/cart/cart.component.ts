import { Component } from '@angular/core';
import { SharedDataService } from '../../../core/services/shared-data.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../shared/product/product.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: any[] = [];

  constructor(private shared: SharedDataService) {
    this.shared.getProducts().subscribe((res) => (this.products = res));
  }
}
