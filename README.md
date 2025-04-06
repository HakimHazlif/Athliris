# Health & Fitness Dashboard Application

## 📌 Project Overview

A React-based web application for health and fitness tracking featuring:

- User onboarding survey
- Protected dashboard
- Profile management
- Cloudinary image storage
- Firebase authentication

## 🚀 Core Features

### 🔐 Authentication System

- Firebase email/password auth
- Firebase reset password auth
- Protected routes using `ProtectRoute` component
- Session persistence

### 📝 Onboarding Survey

- Multi-step form using **Formik**
- Validation with **Yup** schemas
- Redux-managed survey state
- Data preprocessing before Firebase storage

### 🖥️ Dashboard

- **Nested routing** (9+ sub-pages)
- Feature-based folder structure
- Responsive sidebar navigation and user panel
- Build a custom training program

### ⚙️ Settings Page

- Avatar upload via **Cloudinary**
- Username update
- Firebase auth profile synchronization
- Form validation and error handling

## 🛠️ Technical Stack

### Frontend

| Technology      | Usage                  |
| --------------- | ---------------------- |
| React           | Core framework         |
| Redux Toolkit   | State management       |
| React Router v6 | Navigation             |
| React Query     | Remote management      |
| Formik + Yup    | Forms and validation   |
| Tailwind CSS    | Styling                |
| React Hot Toast | UI toast notifications |
| React Icons     | UI icon library        |
| React Scroll    | Smooth scrolling       |
| Axios           | HTTP requests          |

### Backend Services

| Service    | Functionality             |
| ---------- | ------------------------- |
| Firebase   | Authentication & Database |
| Cloudinary | Image storage             |

## 🚨 Error Handling

- Form validation errors
- Firebase auth errors
- Cloudinary upload errors
- Redux async thunk error states

## 🌈 UI Components

```jsx
// Example protected route implementation
<Routes>
  <Route path="login" element={<Login />} />
  <Route path="signup" element={<Signup />} />
  <Route path="reset-password" element={<ResetPassword />}>
    <Route index element={<SendResetEmail />} />
    <Route path="change" element={<ChangePassword />} />
  </Route>

  <Route
    path="user/:username"
    element={
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    }
  >
    {/* Nested dashboard routes */}
  </Route>
</Routes>
```

## 📦 Installation Guide

### Clone repository:

```dash
  git clone https://github.com/HakimHazlif/Athliris.git
```

### Install dependencies:

```bash
  npm install
```

```env
  VITE_FIREBASE_KEY=your_firebase_key
  VITE_FIREBASE_DOMAIN=_your_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE=your_storage
  VITE_FIREBASE_MESSAGING=your_messaging
  VITE_FIREBASE_APP_ID=your_app_id
  VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
  VITE_FIREBASE_DATABASE_URL=your_database_url

  VITE_SPOONACULAR_KEY=your_spoonacular_key

  VITE_CLOUDINARY_CLOUDE_NAME=your_cloudinary_cloud_name
```

### Start development server:

```bash
  npm run dev
```
