import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/route/Layout';
import Splash from '@/pages/Splash/Splash';

/* 마이 페이지, 헤더 관련 */
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';
import Footer from '@/atoms/Footer/Footer';
import MyPageRoutes from '@/Routes/MyPageRoutes';
import CommunityPageRoutes from '@/Routes/CommunityPageRoutes';
import UserPageRoutes from '@/Routes/UserPageRoutes';
import LandingPageRoutes from '@/Routes/LandingPageRoutes';

function App() {
  return (
    <div>
      {/* <Category /> */}
      {/* <DetailCategoryButton /> */}
      <DetailCategory />
    </div>
  );
}
export default App;
