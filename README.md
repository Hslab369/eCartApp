***

# 🛒 ECartApp

ECartApp is a simple **e-commerce shopping cart web application** built with **Angular 19**.  
It demonstrates modern Angular concepts such as components, services, data binding, and routing.

***

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ECartApp.git
cd ECartApp
```


### 2. Install Dependencies

```bash
npm install
```


### 3. Start the Development Server

```bash
ng serve
```

Open your browser at **http://localhost:4200**.
The app will auto-reload on changes.

***

## 📂 Project Structure

After running `ng new`:

```
ECartApp/
│── public/           → static files (images, json)
│── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components/   → feature components
│   │   ├── services/     → reusable services
│   │   └── models/       → TypeScript interfaces
│   └── index.html
│
├── angular.json          → Angular workspace config
├── package.json          → dependencies & scripts
└── README.md
```


***

## ⚒️ Code Scaffolding

Generate a new component:

```bash
ng generate component component-name
```

List all available schematics:

```bash
ng generate --help
```


***

## 📦 Build

Run a production build:

```bash
ng build
```

The output will be in `dist/ECartApp/`.
By default, the build is optimized for speed and performance.

***

## 🧪 Testing

### Unit Tests (Karma)

```bash
ng test
```


### End-to-End Tests

```bash
ng e2e
```

(Choose \& configure a framework such as **Cypress** or **Protractor**.)

***

## 📚 Resources

- [Angular CLI Overview \& Command Reference](https://angular.dev/tools/cli)
- [Angular Official Docs](https://angular.dev)

***

## 🤝 Contribution

1. **Fork** the repo
2. Create a new feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Open a **Pull Request**

***

## 💡 Future Enhancements

- Product listing with filters
- Cart service with persistence
- Checkout flow
- API integration

***
