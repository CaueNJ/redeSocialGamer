import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import Perfil from './pages/profile/profile';
import Layout from './components/upperBar/upperBar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // equivale a path: '/'
        element: <Home />,
      },
      {
        path: ':username',
        element: <Perfil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
