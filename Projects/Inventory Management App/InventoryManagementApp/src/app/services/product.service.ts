import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private storageKey = 'inventory_products';

  constructor() { 
    // Initialize with empty array if nothing exists
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  getProducts(): Product[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getProductById(id: string): Product | undefined {
    const products = this.getProducts();
    return products.find(p => p.id === id);
  }

  saveProduct(product: Product): void {
    const products = this.getProducts();
    if (product.id) {
      // Edit mode
      const index = products.findIndex(p => p.id === product.id);
      if (index !== -1) products[index] = product;
    } else {
      // Add mode: Generate a simple unique ID
      product.id = Date.now().toString();
      products.push(product);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  deleteProduct(id: string): void {
    let products = this.getProducts();
    products = products.filter(p => p.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }
}