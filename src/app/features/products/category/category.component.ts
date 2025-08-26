import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../shared/product/product.component';
import { SharedDataService } from '../../../core/services/shared-data.service';

@Component({
  selector: 'app-category',
  imports: [CommonModule, ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: any[] = [];
  constructor(private dataService: SharedDataService) {
    this.dataService.getCategories().subscribe(res => {
      this.categories = res
    });;
  }
}
