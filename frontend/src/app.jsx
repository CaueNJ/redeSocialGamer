import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Perfil from './pages/profile/profile';
import Layout from './components/upperBar/upperBar';

// Roteador da aplicação
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
