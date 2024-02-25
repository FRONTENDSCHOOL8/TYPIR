import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/route/Layout';
import Splash from '@/pages/Splash/Splash';

/* 마이 페이지, 헤더 관련 */
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';
import NewStyle from '@/pages/NewStyle/NewStyle';
import NewBoard from '@/pages/NewBoard/NewBoard';
import SelectPostImage from '@/pages/SelectPostImage/SelectPostImage';
import MyImageTemplate from '@/molecules/MyImageTemplate/MyImageTemplate';
import MyDetailImage from '@/molecules/MyDetailImage/MyDetailImage';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import MyPostTemplate from '@/molecules/MyPostTemplate/MyPostTemplate';

/* 랜딩 페이지 관련 */
import Landing from '@/pages/Landing/Landing';
import DetailImage from '@/molecules/DetailImage/DetailImage';

/* 커뮤니티 페이지 관련 */
import Community from '@/pages/Community/Community';
import CommunityDetail from '@/pages/CommunityDetail/CommunityDetail';

/* 유저 페이지 관련 */
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import SetInitialProfile from '@/pages/SetInitialProfile/SetInitialProfile';

function App() {
  return (
    <div className="max-w-screen-md mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
