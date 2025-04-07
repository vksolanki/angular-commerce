import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
  imports: [CommonModule, RouterLink],
})
export class CartSummaryComponent {
  constructor(private cartService: CartService) {}

  get items() {
    return this.cartService.items;
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }
}
