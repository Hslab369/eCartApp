import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { SharedDataService } from '../../../core/services/data.service';
import { OrderCreate } from '../../../models/ordercreate.model';

@Component({
  selector: 'app-add-order',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private service: SharedDataService) {
    this.orderForm = this.fb.group({
      date: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
      status: ['pending', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const payload: OrderCreate = this.orderForm.value;
      this.service.addOrder(payload).subscribe({
        next: (res) => {
          alert('Order created successfully');
          this.orderForm.reset({ status: 'pending', price: 0 });
        },
        error: (err) => {
          console.error(err);
          alert('Failed to create order');
        },
      });
    }
  }
}
