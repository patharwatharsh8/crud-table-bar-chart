import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.products$.subscribe(products => this.products = products);
  }

  onEdit(product: Product) {
    this.selectedProduct = { ...product };
  }

  onDelete(id: number) {
    this.productService.deleteProduct(id);
  }

  onSave(product: Product) {
    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      product.id = new Date().getTime();
      this.productService.addProduct(product);
    }
    this.selectedProduct = null;
  }
}

