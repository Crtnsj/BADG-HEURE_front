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
import ComingSoon from './Pages/ComingSoon';
import DisplayRetrospectionAdmin from './Components/Badgeage/DisplayRetrospectionAdmin';
import DisplayMyAccount from './Components/Account/DisplayMyAccount';
import DisplayUserManager from './Components/UserManager/DisplayUserManager';
import BadgOk from './Components/Badgeage/BadgOk';

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
        path: '/home/retrospectionAdmin',
        element: (
          <ProtectAdminRoutes>
            <DisplayRetrospectionAdmin />
          </ProtectAdminRoutes>
        ),
      },
      { path: '/home/myAccount', element: <DisplayMyAccount /> },
      { path: '/home/declaration', element: <ComingSoon /> },
      { path: '/home/notification', element: <ComingSoon /> },
      { path: '/home/about', element: <ComingSoon /> },
      {
        path: '/home/addNews',
        element: (
          <ProtectAdminRoutes>
            <AddNews />
          </ProtectAdminRoutes>
        ),
      },
      {
        path: '/home/userManager',
        element: (
          <ProtectAdminRoutes>
            <DisplayUserManager />
          </ProtectAdminRoutes>
        ),
      },
      { path: '/home/badgOk', element: <BadgOk /> },
    ],
  },
]);

export default router;
