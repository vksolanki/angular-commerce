import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { CartItem } from '../model/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule]
})
export class CheckoutComponent implements OnInit {
  items: CartItem[] = [];
  shipping: number = 10;
  confirmMessage = '';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.items;
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  removeItem(itemId: number) {
    this.cartService.removeItem(itemId);
    this.items = this.cartService.items;
  }

  incrementQuantity(item: CartItem) {
    item.quantity++;
    this.cartService.calculateTotalPrice();
  }

  decrementQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.calculateTotalPrice();
    }
  }

  placeOrder() {
    this.confirmMessage = 'Thank you for your order!';
    this.cartService.clearCart();
    this.items = [];
  }
}