import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './Components/Pages/ErrorPage';
import Home from './Components/Pages/HomePage';
import LoginPages from './Components/Pages/LoginPages';

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
    element: <Home />,
  },
]);

export default router;
