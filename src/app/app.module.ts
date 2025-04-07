import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'products', component: ProductsComponent }, // Products list
  { path: 'products/:id', component: ProductDetailComponent }, // Product details
  { path: 'checkout', component: CheckoutComponent }, // Checkout page
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule], // Configures the router at the application's root level
  exports: [RouterModule], // Makes RouterModule available throughout the app
})
export class AppRoutingModule {}
