import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpperBar from './components/UpperBar';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UpperBar />,
        children: [
            { index: true, element: <Home /> },
            { path: ':username', element: <Perfil /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
