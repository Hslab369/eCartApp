import { Component } from '@angular/core';
import { OrderComponent } from '../../order/order.component';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-home-page',
  imports: [OrderComponent, CartComponent],
  templateUrl: './home-page.component.html',
  // styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {}
