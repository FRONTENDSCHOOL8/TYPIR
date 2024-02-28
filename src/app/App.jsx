import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/molecules/Header/Header';
import Footer from '@/atoms/Footer/Footer';
import MyPageRoutes from '@/Routes/MyPageRoutes';
import CommunityPageRoutes from '@/Routes/CommunityPageRoutes';
import UserPageRoutes from '@/Routes/UserPageRoutes';
import LandingPageRoutes from '@/Routes/LandingPageRoutes';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/rending" element={<Rending />} />
        <Route path="/rending/rendingDetail" element={<RendingDetail />} />
        <Route path="/mypage/account" element={<AccountManagement />} />
        <Route path="/mypage/editProfile" element={<EditProfile />} />
        <Route path="/mypage/album" element={<MyPage />} />
        <Route path="/mypage/board" element={<MyPage />} />
        <Route path="/mypage/bookmark" element={<MyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
