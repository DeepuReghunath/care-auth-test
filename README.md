# care-auth-test

This project is a simple Angular authentication and item listing app built as part of a coding challenge.

Features
Login using API (mocked)

Authenticated routes with route guards

Logout functionality

Lazy-loaded list module

Component-level state management (ComponentStore)

Angular Material UI

Cookie-based token handling

Loading & error UI states

Setup
npm install
ng serve

Build
ng build

Run Tests
ng test



1. App Module
Entry point of the application.

Declares root-level components like AppComponent.

Imports:

CoreModule (singleton services, interceptors, guards)

AppRoutingModule (root routing)

HttpClientModule (API communication)

BrowserModule, Angular Material, etc.

Bootstraps the application.

2. Core Module
Contains services, guards, and interceptors that are singleton and used throughout the app.

Key files:

auth.service.ts → Handles login/logout, stores token in cookies using ngx-cookie-service.

auth.guard.ts → Protects routes by checking authentication status.

auth.interceptor.ts → Automatically attaches JWT token to outgoing HTTP requests.

Imported only once in AppModule (to avoid multiple instances).

3. Feature Modules
The application is divided into feature modules for separation of concerns and lazy loading.

Auth Module:

Contains LoginComponent (handles user login form).

Calls AuthService for authentication and sets token in cookies.

Dashboard Module:

Contains DashboardComponent (protected route).

Displays user email, navigation to list, and logout button.

List Module (Lazy Loaded):

Contains ListComponent and list.routes.ts.

Uses Component Store for managing UI state:

items (data from API)

loading (spinner state)

error (error messages)

Fetches data from /api/items and displays it using Angular Material components.

4. Routing
Defined in AppRoutingModule.

Routes:

/login → Public route for login.

/dashboard → Protected by AuthGuard.

/list → Protected and lazy-loaded for performance optimization.

Fallback route (**) redirects to /login.

5. State Management
Component-level state management using @ngrx/component-store:

Encapsulated within ListComponent.

Handles loading, error, and data states in a reactive way.

No global state store (e.g., NgRx Store) needed as the app is small.

6. UI Layer
Angular Material for UI consistency and responsiveness.

Components:

Login form with validation (ReactiveFormsModule).

Dashboard with navigation and logout.

List page with loading spinner and error handling.

7. Authentication Flow
User logs in via LoginComponent → AuthService.login().

AuthService stores token and user email in cookies (ngx-cookie-service).

AuthGuard checks token presence before allowing access to protected routes.

AuthInterceptor attaches token in Authorization header for all HTTP requests.

On logout, cookies are cleared and user is redirected to /login.

8. Bonus Features Implemented
Lazy Loading: Improves performance by loading ListModule only when required.

Loading Spinner: Provides better UX during API calls.

Error Handling: Displays user-friendly messages on API failure.

