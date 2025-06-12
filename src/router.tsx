import { createBrowserRouter, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Community from './pages/Community';
import Landing from './pages/Landing';
import Login from './pages/Login';
import LoginFlow from './pages/LoginFlow';
import Main from './pages/Main';
import My from './pages/My';
import Progress from './pages/Progress';
import SelectBuket from './pages/SelectBuket';
import Signup from './pages/Signup';
import SignupFlow from './pages/SignupFlow';
import Todolist from './pages/Todolist';
import WritePage from './pages/Write';
import SelectPage from './selectBuket/selectPage';

// 헤더 조건부 렌더링 레이아웃
const Layout = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('key');
  return (
    <>
      {token && <Header />}
      {children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/landing" replace />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/select',
    element: <SelectPage />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/loginflow',
    element: <LoginFlow />
  },
  {
    path: '/signupflow',
    element: <SignupFlow />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/selectbuket',
    element: <SelectBuket />
  },
  {
    path: '/community',
    element: <Layout><Community /></Layout>
  },
  {
    path: "/write",
    element: <WritePage />
  },
  {
    path: "/todolist",
    element: <Layout><Todolist /></Layout>
  },
  {
    path: "/progress",
    element: <Layout><Progress /></Layout>
  },
  {
    path: "/my",
    element: <Layout><My /></Layout>
  }
]);

export default router;
