import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { Order } from '../../models/order.model';
import { environment } from '../../../environments/environment';
import { CategoryWithId } from '../../models/categorywithid.model';
import { ProductCreate } from '../../models/productcreate.model';
import { ProductReadWithId } from '../../models/productwithid.model';
import { ProductBatch } from '../../models/productbatch.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFrequentlyOrdered(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getFrequentlyOrdered`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/getCategories`);
  }

  getCategorieswithId(): Observable<CategoryWithId[]> {
    return this.http.get<CategoryWithId[]>(`${this.apiUrl}/getCategorieswithId`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getProducts`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/getOrders`);
  }

  addProduct(product: ProductCreate): Observable<ProductReadWithId> {
    return this.http.post<ProductReadWithId>(`${this.apiUrl}/addProduct`, product);
  }

  addProductBatch(products: ProductBatch): Observable<ProductReadWithId[]> {
    return this.http.post<ProductReadWithId[]>(`${this.apiUrl}/addProductBatch`, products);
  }
}
