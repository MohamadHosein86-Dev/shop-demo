# 🛒 Shop Demo

A demo e-commerce application built with Next.js (App Router), TypeScript, and Tailwind CSS.

## ✅ Features Implemented

### 🧭 General
- ✅ Built with Next.js App Router
- ✅ TypeScript support
- ✅ Tailwind CSS for styling
- ✅ Fully responsive design
- ✅ Custom reusable UI components (with class-variance-authority)
- ✅ Client/server components used appropriately
- ✅ Error handling & loading states
- ✅ Custom hooks used where needed
- ✅ Detailed and meaningful commit messages

---

### 🧩 Header Section
- ✅ Responsive header with site branding and navigation links
- ✅ Cart icon with item count

---

### 🛍️ Product Listing Page
- ✅ Fetches products from REST API (json-server or external API)
- ✅ Product cards show: Image, Name, Price, Stock Status, Rating
- ✅ Pagination implemented
- ✅ Search functionality
- ✅ Responsive grid layout

---

### 📦 Product Detail Page
- ✅ Dynamic routing (/products/[id])
- ✅ Detailed product information (including image)
- ✅ "Add to Cart" functionality (client-side state)

---

### 📬 Contact Us Page
- ✅ Static page with a contact form
- ✅ Built using react-hook-form + zod for validation
- ✅ Validation errors and success handling UI

---

### 🔐 Admin Panel (Bonus)
- ✅ Protected route (/admin) using simple client auth guard
- ✅ CRUD operations on products:
  - ✅ Create product
  - ✅ Read/list all products
  - ✅ Edit/update product
  - ✅ Delete product
- ✅ Form validation using react-hook-form + zod
- ✅ Admin UI with proper feedback (loading/errors/success)

---

## 🚀 Getting Started

`bash
# Install dependencies
npm install

# Run the development server
npm run dev
