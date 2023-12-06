import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Login from './pages/Login';
import ClientRegister from './pages/ClientRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/cadastroCliente",
    element: <ClientRegister />
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
