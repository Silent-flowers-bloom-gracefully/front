import { useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  const location = useLocation();
  const showHeaderPaths = ['/진행도', 'todo리스트', '커뮤니티', '마이']; // 나중에 실제 경로로 변경 필요
  const shouldShowHeader = showHeaderPaths.includes(location.pathname);

  console.log(shouldShowHeader);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Outlet />
    </>
  );
}
