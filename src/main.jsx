import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import router from './Route/Route';
import { RouterProvider } from 'react-router';
import MainLayout from '../Layouts/MainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,

  <RouterProvider router={router} />
);
