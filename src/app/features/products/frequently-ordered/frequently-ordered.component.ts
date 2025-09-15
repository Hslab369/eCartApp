import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../../shared/product/product.component';
import { SharedDataService } from '../../../core/services/data.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frequently-ordered',
  imports: [CommonModule, ProductComponent],
  templateUrl: './frequently-ordered.component.html',
  // styleUrls: ['./frequently-ordered.component.css'],
})
export class FrequentlyOrderedComponent implements OnInit{
  products: Product[] = [];

  constructor(private dataService: SharedDataService) {}

  ngOnInit(): void {
    this.dataService.getFrequentlyOrdered().subscribe((data) => {
      this.products = data;
    });
  }
}
