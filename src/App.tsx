import { useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  const location = useLocation();
  const showHeaderPaths = ['/progress', '/todolist', '/커뮤니티', '/마이'];
  const shouldShowHeader = showHeaderPaths.includes(location.pathname);

  console.log(shouldShowHeader);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Outlet />
    </>
  );
}
