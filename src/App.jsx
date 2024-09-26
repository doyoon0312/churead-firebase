import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Post from './pages/Post';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import Edit from './pages/Edit';
import { auth } from './firebase';
import { delay } from './lib/common.js';
import Private from './pages/Private.jsx';

function App() {
  // logic
  const [churead, setChuread] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handlePost = (churead) => {
    // 매개변수, parameter
    setChuread(churead);
  };

  const init = async () => {
    // 로그인 상태 변화 감지하기
    await delay(1000);
    // 'firebase.js'의 auth
    await auth.authStateReady();
    console.log('인증완료', auth);
    // 인증 준비 다 되는 로딩 false
    setIsLoading(false);
  };

  //페이지 진입시 딱 한번
  useEffect(() => {
    init();
  }, []);

  // view

  return (
    <div className="bg-churead-black h-full text-white overflow-auto">
      {isLoading ? (
        <p className="text-2xl">Loading...</p>
      ) : (
        <div className="max-w-[572px] mx-auto h-full">
          <BrowserRouter>
            <Routes>
              {/* 로그인 사용자만 접근 가능 시작 */}
              <Route path="/" element={<Private />}>
                <Route
                  path=""
                  element={
                    <Home
                      churead={churead}
                      editedItem={editedItem}
                      onEdit={(data) => setEditItem(data)}
                    />
                  }
                />
                <Route path="post" element={<Post onPost={handlePost} />} />
                <Route
                  path="edit"
                  element={
                    <Edit
                      editItem={editItem}
                      onEdited={(data) => setEditedItem(data)}
                    />
                  }
                />
                <Route path="profile" element={<Profile />} />
              </Route>
              {/* 로그인 사용자만 접근 가능 끝 */}

              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
