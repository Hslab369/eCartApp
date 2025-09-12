import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../core/services/data.service';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders$!: Observable<Order[]>;

  constructor(private shared: SharedDataService) {}

  ngOnInit() {
    this.orders$ = this.shared.getOrders();
  }
}
