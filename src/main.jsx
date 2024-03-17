import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from "./components/Pages/Login.jsx";
import Register from "./components/Pages/Register.jsx";
import RegisterEmployee from "./components/Pages/RegisterEmployee.jsx";
import PageNotFound from "./components/Pages/PageNotFound.jsx";
import Dashboard from "./components/Pages/Dashboard.jsx";
import ProtectedRoute from "./components/Pages/ProtectedRoute.jsx";
import Profile from './components/Pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />,
    errorElement: <PageNotFound />,
  },
  {
    path:'/register-organization',
    element: <Register />,
  },
  {
    path:'/empregister',
    element: <RegisterEmployee />,
  },
  {
    path:'/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
