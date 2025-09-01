import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../shared/product/product.component';
import { SharedDataService } from '../../../core/services/data.service';
import { Category } from '../../../models/category.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category',
  imports: [CommonModule, MatExpansionModule, MatIconModule, ProductComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit{
  categories: Category[] = [];

  constructor(private dataService: SharedDataService) {}

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
