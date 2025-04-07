import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CartItem } from '../model/cart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart() {
    const cartItem: CartItem = {
      id: Math.floor(Math.random() * 1000),
      title: this.product.title,
      quantity: 1,
      price: this.product.price,
      productId: this.product.id,
    };
    this.cartService.addItem(cartItem);
    this.router.navigate(['/products']);
  }
}