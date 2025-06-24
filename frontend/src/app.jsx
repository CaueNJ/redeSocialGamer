import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: ':username', element: <Perfil /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
