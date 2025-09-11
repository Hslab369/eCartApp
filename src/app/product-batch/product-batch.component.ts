import { Component, OnInit } from '@angular/core';
import { CategoryWithId } from '../models/categorywithid.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SharedDataService } from '../core/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-batch',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-batch.component.html',
  styleUrls: ['./product-batch.component.css']
})
export class ProductBatchComponent implements OnInit {
  productbatchForm: FormGroup;
  categories: CategoryWithId[] = [];

  constructor(private fb: FormBuilder, private service: SharedDataService) {
    this.productbatchForm = this.fb.group({
      cat_id: ['', Validators.required],
      names: this.fb.array([this.fb.control('', Validators.required)])
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

  addProduct(): void {
    this.names.push(this.fb.control('', Validators.required));
  }


  onSubmit(): void {
    if (this.productbatchForm.valid) {
      this.service.addProductBatch(this.productbatchForm.value).subscribe({
        next: (res) => {
          alert('Product saved successfully!');
          this.productbatchForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Failed to save product');
        },
      });
    } else {
      this.productbatchForm.markAllAsTouched();
    }
  }
}


