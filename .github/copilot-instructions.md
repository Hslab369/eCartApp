The eCartApp repository is an Angular 19 frontend (standalone components) paired with a FastAPI backend. These instructions highlight the project's architecture, common workflows, and concrete examples an AI agent can use to be productive quickly.

Key facts

- Framework: Angular 19 using standalone components and provideRouter/provideHttpClient in `src/app/app.config.ts`.
- Backend: FastAPI (separate repo). Default base URL is read from `src/environments/environment.ts` and used in `src/app/core/services/data.service.ts`.
- Routing: lazy-loaded components are defined in `src/app/app.routes.ts` (e.g. `productbatch` -> `src/app/product-batch/product-batch.component.ts`).

Dev commands

- Install: `npm install`
- Dev server: `npm start` (runs `ng serve`, default host: http://localhost:4200)
- Build: `npm run build`
- Tests: `npm test` (Karma/Jasmine)

API and models

- API endpoints used by the app (from README and `SharedDataService`): `/getFrequentlyOrdered`, `/getCategories`, `/getCategorieswithId`, `/getProducts`, `/getOrders`, `/addProduct`, `/addProductBatch`.
- Important TypeScript interfaces (look in `src/app/models/`):
  - `ProductBatch` (`cat_id: number; names: string[]`) — used by `product-batch` feature.
  - `ProductCreate` (`name, price, is_popular, category_id`) — used by `add-product`.
  - `CategoryWithId` (`cat_id, name`) — returned by `/getCategorieswithId`.

Conventions and patterns (project-specific)

- Standalone components: many components set `standalone: true` and import required modules directly (see `product-batch.component.ts`). Prefer adding features by creating standalone components.
- Router: routes are simple and lazy-load components via dynamic imports in `app.routes.ts`. When adding pages, register only the route and a lazy-loaded component.
- Shared API service: all HTTP calls go through `SharedDataService` in `src/app/core/services/data.service.ts`. New endpoints should be added there for centralization and typed observables.
- Assets: static product images are under `public/` and are copied to the build via `angular.json` assets. Use `/assets`-like public paths as seen in templates.

Concrete examples an agent can use

- To add a new API call: add a typed method in `SharedDataService`, e.g. `getSpecials(): Observable<Product[]> { return this.http.get<Product[]>(`${this.apiUrl}/getSpecials`); }` and then inject `SharedDataService` in the target component.
- To add a route + page: create `src/app/features/<name>/<name>.component.ts` as standalone, then add an entry to `app.routes.ts` using the lazy load pattern used throughout.
- To wire a form that posts a ProductBatch: use the `ProductBatch` interface in `src/app/models/productbatch.model.ts` and call `SharedDataService.addProductBatch()` which expects `{ cat_id: number, names: string[] }`.

Debugging and tests

- If the frontend fails to call the backend, confirm `src/environments/environment.ts` -> `apiUrl` and that the FastAPI server is running at that host/port (README suggests http://localhost:8000).
- Run unit tests with `npm test`. Tests use Karma; pick a single spec file and run the test runner in watch mode during development.

Files to check first when editing UI or API wiring

- `src/app/core/services/data.service.ts` (central API client)
- `src/app/app.routes.ts` (routing layout)
- `src/app/app.config.ts` (providers and router/http client bootstrap)
- `src/app/models/*` (data shapes across app)
- `public/` (images referenced by product cards)

What not to change without CI / human review

- Do not change `app.config.ts` providers unless you understand global effects (router and HttpClient bootstrapping).
- Avoid renaming model properties without changing both frontend usage and backend contract (API expects specific fields like `cat_id` and `names`).

If you need clarification

- Ask the maintainer for the backend repo URL or API contract (OpenAPI spec) if you need to add non-trivial API integrations.

If this file already existed, the agent should preserve any project-specific notes in it and append or merge the above sections rather than overwriting verbatim.

---

Update request: review these instructions and point out any missing context (CI, environment overrides, or non-obvious developer tasks) to iterate.
