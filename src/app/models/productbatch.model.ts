import { ProductCreateBatch } from './productcreatebatch.model';

export interface ProductBatch {
  cat_id: number;
  products: ProductCreateBatch[];
}
