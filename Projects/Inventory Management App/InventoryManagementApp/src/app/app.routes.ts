import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { ProductFormComponent } from './components/product-form/product-form';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: ProductFormComponent },
  { path: 'edit/:id', component: ProductFormComponent },
  { path: '**', redirectTo: '' } // Fallback route
];