# FreshCart — E-Commerce Application

A modern, full-featured e-commerce web application built with **Next.js 16**, **TypeScript**, **shadcn/ui**, and a RESTful backend API. The UI was translated from a **Figma design** into a fully responsive, production-ready storefront.

## Overview

FreshCart is a complete online shopping platform featuring product browsing, cart management, wishlist, checkout with address management, order tracking, user authentication, and account settings all delivered through a clean, accessible interface.


## Live
🔗 [FreshCart](https://fresh-cart-delta-eight.vercel.app/)


## Features

### Home
- Hero image slider with navigation dots
- Category cards for quick browsing
- Featured offers and product sections
- Newsletter subscription form (with mobile app promotion)

### Search & Discovery
- Full-text search with live results
- Filter badges and advanced search filters
- Mobile-optimized search filters drawer
- Multiple product view modes (grid/list)
- Pagination and sort-by controls

### Products
- Product detail page with image slider
- Product ratings and reviews (create, update, delete)
- Related products slider
- Add to cart / wishlist actions
- Quantity selector

### Cart
- Add, remove, and update product quantities
- Clear entire cart
- Order summary with pricing breakdown
- Coupon code support

### Checkout
- Multi-step checkout flow
- Saved address selection and new address form
- Payment method selection (Cash / Online via Stripe)
- Order confirmation

### Wishlist
- Add/remove products
- Toggle button UI for instant feedback

### Orders
- View all past orders
- Order detail cards with delivery address and item summary

### Account & Settings
- User profile data form
- Change password form

### Authentication
- Sign In / Register forms
- Forgot password flow (email → verification code → reset)
- Step indicator UI for multi-step flows
- NextAuth.js session handling

### Addresses
- View, add, and remove delivery addresses
- Address dialog for quick editing

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/Samar-Mahmoud/fresh-cart
cd fresh-cart

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
BASE_URL=https://api-url.com
AUTH_SECRET=nextauth_secret
APP_URL=http://localhost:3000
AUTH_GOOGLE_ID=google_app_client_id
AUTH_GOOGLE_SECRET=google_app_client_secret
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
