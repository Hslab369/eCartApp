# 🛒 Angular eCartApp (Frontend)

This project is a **modern Angular 19 frontend** for an e-commerce demo app.
It follows **industry best practices** with:

* **Standalone Components** (no NgModules)
* **Typed Models** for strong typing (`Product`, `Category`, `Order`)
* **Reactive Forms** with validation (Login page)
* **Async Observables with AsyncPipe** (no manual subscriptions)
* **Angular Material** (Accordion, Navbar, Forms)
* **Reusable UI Components** (Product Card shared across views)

It consumes a **FastAPI backend** (separate repo) for products, categories, and orders.

---

## 🚀 Features

* **Navbar** – Angular Material navbar with active link highlighting.
* **Reusable Product Card** – Input props: `name`, `imgPath`, `price`, `cardType`.
* **Frequently Ordered Products** – Consumes `/getFrequentlyOrdered`.
* **Category View** – Accordion layout (`/getCategories`).
* **Cart & Orders Pages** – Shows cart items and past orders (`/getOrders`).
* **Login Page** – Reactive form with validation (username/password).

---

## 📂 Project Structure

```
src/
│   index.html
│   main.ts
│   styles.css
│
├───app
│   │   app.component.*       # Root component
│   │   app.config.ts         # Application config
│   │   app.routes.ts         # Angular Router setup
│   │
│   ├───auth
│   │   └───login             # Reactive login form
│   │
│   ├───core
│   │   └───services
│   │           data.service.ts   # SharedDataService with HttpClient
│   │
│   ├───features
│   │   ├───home
│   │   │   ├───cart
│   │   │   ├───home-page
│   │   │   └───order            # Uses AsyncPipe for typed Observables
│   │   │
│   │   └───products
│   │       ├───category         # Angular Material accordion
│   │       ├───frequently-ordered
│   │       └───products-page
│   │
│   ├───layout
│   │   └───navbar               # Navbar with route highlighting
│   │
│   ├───models                   # Typed interfaces
│   │       category.model.ts
│   │       order.model.ts
│   │       product.model.ts
│   │
│   └───shared
│       └───product              # Reusable product card
│
└───environments
        environment.ts           # Backend API base URL
```

---

## 🏗️ Tech Stack

* **Angular 19** – Standalone Components, Angular Router, HttpClient
* **Angular Material** – Accordion, Navbar, Form controls
* **Bootstrap / TailwindCSS** – Responsive layouts (optional styling)
* **FastAPI Backend** – Serves product, category, and order data

---

## ⚡ Setup Instructions

```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/angular-products-page.git
cd angular-products-page

# Install dependencies
npm install

# Run app
ng serve
```

➡️ App runs at: `http://localhost:4200/`
➡️ Backend (FastAPI) must be running at: `http://localhost:8000/`

API Endpoints used:

* `/getFrequentlyOrdered`
* `/getCategories`
* `/getProducts`
* `/getOrders`

---

## 📸 Screenshots (to add later)

| Home                          | Products                              | Categories                                | Orders                            | Login                           |
| ----------------------------- | ------------------------------------- | ----------------------------------------- | --------------------------------- | ------------------------------- |
| ![Home](screenshots/home.png) | ![Products](screenshots/products.png) | ![Categories](screenshots/categories.png) | ![Orders](screenshots/orders.png) | ![Login](screenshots/login.png) |

---

## 🔮 Future Improvements

* JWT Authentication with FastAPI backend.
* NgRx / Angular Signals for state management.
* Dark / Light theme toggle.

---

## 👨‍💻 Author

Built by [Harshal Sonone](https://www.linkedin.com/in/harshal-sonone-910617231/) – exploring **Angular + FastAPI full-stack development**.
