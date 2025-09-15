import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../shared/product/product.component';
import { SharedDataService } from '../../../core/services/data.service';
import { Category } from '../../../models/category.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  imports: [CommonModule, MatExpansionModule, MatIconModule, ProductComponent],
  templateUrl: './category.component.html',
  // styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories$!: Observable<Category[]>;

  constructor(private shared: SharedDataService) {}

  ngOnInit(): void {
    this.categories$ = this.shared.getCategories();
  }
}
