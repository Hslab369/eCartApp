import { Component, OnInit } from '@angular/core';
import { CategoryWithId } from '../../../models/categorywithid.model';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControlName,
} from '@angular/forms';
import { SharedDataService } from '../../../core/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-batch',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-batch.component.html',
  // styleUrls: ['./product-batch.component.css'],
})
export class ProductBatchComponent implements OnInit {
  productbatchForm: FormGroup;
  categories: CategoryWithId[] = [];

  constructor(private fb: FormBuilder, private service: SharedDataService) {
    this.productbatchForm = this.fb.group({
      cat_id: ['', Validators.required],
      products: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          price: [0, [Validators.required, Validators.min(0.01)]],
          is_popular: [false],
        }),
      ]),
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

  get names(): FormArray {
    return this.productbatchForm.get('names') as FormArray;
  }

  get products(): FormArray {
    return this.productbatchForm.get('products') as FormArray;
  }

  addProduct(): void {
    this.products.push(
      this.fb.group({
        name: ['', Validators.required],
        price: [0, [Validators.required, Validators.min(0.01)]],
        is_popular: [false],
      })
    );
  }

  removeProduct(index: number): void {
    if (this.products.length > 1) {
      this.products.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.productbatchForm.valid) {
      const payload = this.productbatchForm.value;
      console.table('Form Submitted', payload);
      this.service.addProductBatch(payload).subscribe({
        next: (res) => {
          alert('Product saved successfully!');
          this.productbatchForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Failed to save product');
        },
      });
    }
  }
}
