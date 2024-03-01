import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from '@/molecules/Header/Header';
import Footer from '@/atoms/Footer/Footer';

import MyPageRoutes from '@/route/MyPageRoutes';
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';

import CommunityPageRoutes from '@/route/CommunityPageRoutes';
import UserPageRoutes from '@/route/UserPageRoutes';
import LandingPageRoutes from '@/route/LandingPageRoutes';
import Rending from '@/pages/Rending/Rending';
import RendingDetail from '@/pages/RendingDetail/RendingDetail';
import NewBoard from '@/pages/NewBoard/NewBoard';

const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL ?? '/',
    element: (
      <>
        <Header />
        <main>{<Outlet />}</main>
        <Footer />
      </>
    ),
    children: [
      {
        index: true, // '/'
        element: <UserPageRoutes />,
      },
      {
        path: 'mypage',
        element: <MyPageRoutes />,
        children: [
          {
            index: true, // '/mypage'
            element: <MyPage />,
          },
          {
            path: 'account', // '/mypage/account'
            element: <AccountManagement />,
          },
          {
            path: 'editProfile', // '/mypage/editProfile'
            element: <EditProfile />,
          },
        ],
      },
      {
        path: 'community', // '/community'
        element: <CommunityPageRoutes />,
      },
      {
        path: 'category', // '/login/randing'
        element: <LandingPageRoutes />,
        children: [
          {
            index: true,
            element: <Rending />,
          },
          {
            path: 'detail',
            element: <RendingDetail />,
          },
          {
            path: 'newBoard',
            element: <NewBoard />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="max-w-screen-md mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
