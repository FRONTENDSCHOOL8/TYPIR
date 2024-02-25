import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
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
