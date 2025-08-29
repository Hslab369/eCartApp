import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../shared/product/product.component';
import { SharedDataService } from '../../../core/services/shared-data.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category',
  imports: [CommonModule, ProductComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: Category[] = [];
  
  constructor(private dataService: SharedDataService) {}

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
