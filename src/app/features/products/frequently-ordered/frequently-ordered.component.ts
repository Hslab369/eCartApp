import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../shared/product/product.component';
import { SharedDataService } from '../../../core/services/shared-data.service';

@Component({
  selector: 'app-frequently-ordered',
  imports: [CommonModule, ProductComponent],
  templateUrl: './frequently-ordered.component.html',
  styleUrl: './frequently-ordered.component.css',
})
export class FrequentlyOrderedComponent {
  items: any[] = [];

  constructor(private dataService: SharedDataService) {
    this.items = this.dataService.getFrequentlyOrdered();
  }
}
