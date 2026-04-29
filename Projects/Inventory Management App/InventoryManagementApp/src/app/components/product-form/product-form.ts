import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-form.html'
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  isEditMode = false;
  currentProductId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Initialize form structure and validation rules
    this.productForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.1)]],
      quantity: [0, [Validators.required, Validators.min(0)]]
    });

    // Check if we are in edit mode by looking for an 'id' in the URL
    this.currentProductId = this.route.snapshot.paramMap.get('id');
    
    if (this.currentProductId) {
      this.isEditMode = true;
      const productToEdit = this.productService.getProductById(this.currentProductId);
      if (productToEdit) {
        // Populate the form with existing data
        this.productForm.patchValue(productToEdit);
      }
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.saveProduct(this.productForm.value);
      this.router.navigate(['/']); // Redirect back to dashboard
    }
  }
}