import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { Order } from '../../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getFrequentlyOrdered(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getFrequentlyOrdered`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/getCategories`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getProducts`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/getOrders`);
  }
}
