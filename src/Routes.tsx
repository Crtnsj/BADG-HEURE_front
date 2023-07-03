import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/HomePage';
import LoginPages from './Pages/LoginPages';
import ProtectRoutes from './Components/ProtectRoutes';
import AddNews from './Components/News/AddNews';
import DisplayNews from './Components/News/DisplayNews';
import ProtectAdminRoutes from './Components/ProtectAdminRoutes';
import DisplayActions from './Components/Actions/DisplayActions';
import AddBadg from './Components/Badgeage/AddBadg';
import DisplayRetrospection from './Components/Badgeage/DisplayRetrospection';

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
      <ProtectRoutes>
        <Home />
      </ProtectRoutes>
    ),
    children: [
      {
        path: '/home',
        element: (
          <>
            <DisplayActions />
            <DisplayNews />
          </>
        ),
      },
      { path: '/home/badgeage', element: <AddBadg /> },
      { path: '/home/retrospection', element: <DisplayRetrospection /> },
      {
        path: '/home/addNews',
        element: (
          <ProtectAdminRoutes>
            <AddNews />
          </ProtectAdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
