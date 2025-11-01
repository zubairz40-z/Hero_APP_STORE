import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import MainLayout from '../../Layouts/MainLayout';
import ErrorPage from '../../Pages/Error Page';
import Home from '../../Pages/Home';
import Apps from '../../Pages/All Apps';
import AppDetails from '../../Pages/App Details';
import InstalledApp from '../../Pages/My Installation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'apps',
        element: <Apps></Apps>,
      },
      {
        path: 'apps/:id',
        element: <AppDetails />,
      },
      {
        path: 'installed',
        element: <InstalledApp></InstalledApp>,
      },
    ],
  },
]);

export default router;
