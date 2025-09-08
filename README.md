# 🛒 Angular eCartApp (Frontend)

A modern **Angular 19 e-commerce demo app** built with standalone components, Angular Material, and typed Observables — connected to a **FastAPI backend**.  
This repo is intended for **learning, demos, or as a starter template** for small Angular + FastAPI projects.

[![GitHub stars](https://img.shields.io/github/stars/Hslab369/eCartApp?style=flat-square)](https://github.com/Hslab369/eCartApp/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Hslab369/eCartApp?style=flat-square)](https://github.com/Hslab369/eCartApp/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Hslab369/eCartApp?style=flat-square)](https://github.com/Hslab369/eCartApp/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/Hslab369/eCartApp?style=flat-square)](https://github.com/Hslab369/eCartApp/commits/main)
[![GitHub license](https://img.shields.io/github/license/Hslab369/eCartApp?style=flat-square)](https://github.com/Hslab369/eCartApp/blob/main/LICENSE)

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi&logoColor=white)

---

## 🚀 Features

* **Product Listing & Categories**

  * Category accordion view (`/getCategories`)
  * Frequently Ordered section (`/getFrequentlyOrdered`)

* **Reusable Product Card**

  * Props: `name`, `imgPath`, `price`, `cardType`

* **Shopping Cart & Orders**

  * Add to cart, order history (`/getOrders`)
  * Typed Observables with `AsyncPipe`

* **Authentication (Stubbed)**

  * Login page with reactive form (username/password)
  * Can be extended to JWT-based auth

---

## 📂 Project Structure

```
src/app/
├─ layout/          # Navbar
├─ auth/            # Login (Reactive form)
├─ core/            # SharedDataService (API calls, state)
├─ models/          # Interfaces for Product, Category, Order
├─ shared/          # Reusable Product card
└─ features/        # Home, Cart, Orders, Products (pages)
src/environments/     # Environment configs (dev)

```

* **Routing:** `src/app/app.routes.ts`
* **Config:** `src/app/app.config.ts`
* **Assets:** `public/` contains product images, `screenshots/` contains demo screenshots

---

## 🏗️ Tech Stack

* **Angular 19** – Standalone Components, Angular Router, HttpClient, AsyncPipe
* **Angular Material** – Accordion, form controls
* **Bootstrap** – responsive product cards
* **FastAPI Backend** – products, categories, and orders (separate repo)

---

## ⚡ Setup Instructions

```bash
# Clone repo
git clone https://github.com/Hslab369/eCartApp.git
cd eCartApp

# Install dependencies
npm install

# Run app
ng serve
```

➡️ App runs at: [http://localhost:4200](http://localhost:4200)

➡️ Backend (FastAPI) must be running at: [http://localhost:8000](http://localhost:8000)

**API Endpoints used:**

* `/getFrequentlyOrdered`
* `/getCategories`
* `/getProducts`
* `/getOrders`

---

## 📸 Screenshots (coming soon)

| Home                          | Products                              | Categories                                | Orders                            | Login                           |
| ----------------------------- | ------------------------------------- | ----------------------------------------- | --------------------------------- | ------------------------------- |
| ![Home](screenshots/home.png) | ![Products](screenshots/products.png) | ![Categories](screenshots/categories.png) | ![Orders](screenshots/orders.png) | ![Login](screenshots/login.png) |

---

## 🔮 Future Improvements

1. JWT Authentication with FastAPI backend
2. NgRx / Angular Signals for state management
3. Dark / Light theme toggle
4. End-to-end testing (Cypress)

---

## 🤝 Contributing

This project is mainly for learning/demo purposes, but contributions are welcome.

---

## 📜 License

This project will be licensed under the **MIT License**.  
(⚡ A `LICENSE` file will be added soon.)

---

## 👨‍💻 Author

Built by [Harshal Sonone](https://www.linkedin.com/in/harshal-sonone-910617231/) – exploring **Angular + FastAPI full-stack development** 🚀

---

✨ *Happy coding with Angular & FastAPI!*

---
