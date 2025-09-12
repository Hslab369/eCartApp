import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { SharedDataService } from '../../../core/services/data.service';
import { CategoryWithId } from '../../../models/categorywithid.model';
import { ProductCreate } from '../../../models/productcreate.model';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productForm: FormGroup;
  categories: CategoryWithId[] = [];

  constructor(private fb: FormBuilder, private service: SharedDataService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      cat_id: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      is_popular: [false],
    });
  }

  ngOnInit(): void {
    this.service.getCategorieswithId().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const payload: ProductCreate = this.productForm.value;
      
      this.service.addProduct(payload).subscribe({
        next: (res) => {
          alert('Product saved successfully!');
          this.productForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Failed to save product');
        },
      });
    }
  }
}
