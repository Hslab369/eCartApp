import { Component } from '@angular/core';
import { SharedDataService } from '../../../core/services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  orders: any[] = [];

  constructor(private shared: SharedDataService) {
    this.shared.getOrders().subscribe((res) => (this.orders = res));
  }
}
