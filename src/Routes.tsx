import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/HomePage';
import LoginPages from './Pages/LoginPages';
import ProtectRoutes from './Components/ProtectRoutes';

const storageToken = localStorage.getItem('token');

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/auth',
    errorElement: <ErrorPage />,
    element: <LoginPages />,
  },
  {
    path: '/home',
    errorElement: <ErrorPage />,
    element: (
      <ProtectRoutes token={storageToken}>
        <Home />
      </ProtectRoutes>
    ),
  },
]);

export default router;
