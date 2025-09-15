import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../shared/product/product.component';
import { SharedDataService } from '../../../core/services/data.service';
import { Category } from '../../../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  imports: [CommonModule, ProductComponent],
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories$!: Observable<Category[]>;

  constructor(private shared: SharedDataService) {}

  ngOnInit(): void {
    this.categories$ = this.shared.getCategories();
  }
}
