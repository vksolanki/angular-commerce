import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/products';
  id!: number;
  items!: CartItem[]; // Array to hold cart items
  totalPrice!: number; // Variable to hold total price

  constructor() {
    this.items = []; // Initialize the items array
    this.totalPrice = 0; // Initialize the total price to 0
  }
  addItem(item: CartItem) {
    if (this.id == 0) {
      this.initNewCart();
    }
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Increment quantity if item already exists
    } else {
      this.items.push(item); // Add new item to the cart
    }
    this.calculateTotalPrice(); // Recalculate total price after adding item
  }
  removeItem(itemId: number) {
    const index = this.items.findIndex((i) => i.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1); // Remove item from the cart
    }
    this.calculateTotalPrice(); // Recalculate total price after removing item
  }
  clearCart() {
    this.items = []; // Clear the items array
    this.totalPrice = 0; // Reset total price to 0
  }
  calculateTotalPrice() {
    // Calculate total price of items in the cart
    this.totalPrice = this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ); // Sum up the price of all items in the cart
  }
  getTotalPrice() {
    // Get the total price of items in the cart
    return this.totalPrice; // Return the total price
  }

  initNewCart() {
    // Initialize a new cart
    this.items = []; // Reset items array to empty
    this.totalPrice = 0; // Reset total price to 0
    // generate random id for the cart
    this.id = Math.floor(Math.random() * 1000); // Generate a random id between 0 and 999
  }
}
