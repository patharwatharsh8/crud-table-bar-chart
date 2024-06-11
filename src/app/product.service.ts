import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  private products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.productsSubject.next(this.products);
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next(this.products);
  }
}

