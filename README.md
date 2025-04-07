# Angular E-commerce Application

This is a simple e-commerce application built with Angular. It allows users to browse products, view product details, add items to a cart, and proceed to checkout.

## Features

- **Home Page**: Welcome page with a link to view products.
- **Product Listing**: Displays a list of products fetched from an API.
- **Product Details**: Detailed view of a selected product with an option to add it to the cart.
- **Cart Management**: Add, remove, and update quantities of items in the cart.
- **Checkout**: Review cart items and place an order.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Project Structure

```
.
├── .gitignore
├── angular.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── src/
│   ├── global_styles.css
│   ├── index.html
│   ├── main.ts
│   ├── app/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.module.ts
│   │   ├── app.routes.ts
│   │   ├── cart-summary/
│   │   │   ├── cart-summary.component.css
│   │   │   ├── cart-summary.component.html
│   │   │   ├── cart-summary.component.spec.ts
│   │   │   ├── cart-summary.component.ts
│   │   ├── checkout/
│   │   │   ├── checkout.component.css
│   │   │   ├── checkout.component.html
│   │   │   ├── checkout.component.spec.ts
│   │   │   ├── checkout.component.ts
│   │   ├── header/
│   │   │   ├── header.component.css
│   │   │   ├── header.component.html
│   │   │   ├── header.component.spec.ts
│   │   │   ├── header.component.ts
│   │   ├── home/
│   │   │   ├── home.component.css
│   │   │   ├── home.component.html
│   │   │   ├── home.component.spec.ts
│   │   │   ├── home.component.ts
│   │   ├── model/
│   │   │   ├── cart.ts
│   │   ├── product-detail/
│   │   │   ├── product-detail.component.css
│   │   │   ├── product-detail.component.html
│   │   │   ├── product-detail.component.spec.ts
│   │   │   ├── product-detail.component.ts
│   │   ├── products/
│   │   │   ├── products.component.css
│   │   │   ├── products.component.html
│   │   │   ├── products.component.spec.ts
│   │   │   ├── products.component.ts
│   │   ├── services/
│   │   │   ├── cart.service.ts
│   │   │   ├── product.service.ts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Angular CLI (v19 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:4200`.

## Build

To build the project for production, run:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## API

This project uses the [Any Store API](https://<anyapiurl>/) to fetch product data.

Sample API Response
The /products endpoint returns the following response:

```
[
  {
    "id": 101,
    "title": "Random Backpack - Fits 15 Laptops",
    "price": 99.99,
    "description": "A versatile backpack for everyday use. Includes a padded sleeve for laptops up to 15 inches.",
    "category": "accessories",
    "image": "https://dummyimage/600x400/000/fff&text=Backpack",
    "rating": {
      "rate": 4.5,
      "count": 200
    }
  },
  {
    "id": 102,
    "title": "Casual Slim Fit T-Shirts",
    "price": 19.99,
    "description": "Comfortable slim-fit t-shirts with a modern design. Perfect for casual outings.",
    "category": "clothing",
    "image": "https://dummyimage/600x400/000/fff&text=T-Shirt",
    "rating": {
      "rate": 4.0,
      "count": 150
    }
  }
]

## Screens

![Screenshot 2025-04-07 094242](https://github.com/user-attachments/assets/68493212-24f0-4e19-91ac-9176e02a49bd)

![Screenshot 2025-04-07 094258](https://github.com/user-attachments/assets/a24d6348-e5fa-4728-bc36-f7a6b8f90572)

![Screenshot 2025-04-07 094308](https://github.com/user-attachments/assets/78a8894e-e809-409d-a9ef-f7780989f118)

![Screenshot 2025-04-07 094343](https://github.com/user-attachments/assets/b2b836e8-6449-42ee-8f64-69dda6032251)

![Screenshot 2025-04-07 094357](https://github.com/user-attachments/assets/bc16059c-b173-4ec2-bec9-5e86d5311f01)
