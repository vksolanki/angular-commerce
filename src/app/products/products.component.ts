import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [RouterLink, CommonModule],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data; // Assign the fetched data to the products array
      },
      (error) => {
        console.error('Error fetching products:', error); // Handle errors
      }
    );
  }
}
