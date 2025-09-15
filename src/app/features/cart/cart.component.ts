import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductComponent } from '../../shared/product/product.component';
import { SharedDataService } from '../../core/services/data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './cart.component.html',
  // styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products$!: Observable<Product[]>; // Async Observable instead of array

  constructor(private shared: SharedDataService) {}

  ngOnInit(): void {
    this.products$ = this.shared.getProducts(); // Assign observable directly
  }
}
