import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { SharedDataService } from '../../../core/services/data.service';
import { CategoryCreate } from '../../../models/categorycreate.model';

@Component({
  selector: 'app-add-category',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private service: SharedDataService) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const payload: CategoryCreate = this.categoryForm.value;
      this.service.addCategory(payload).subscribe({
        next: (res) => {
          alert('Category created successfully');
          this.categoryForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Failed to create category');
        },
      });
    }
  }
}
