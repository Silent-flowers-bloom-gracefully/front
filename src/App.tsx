import { useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  const location = useLocation();
  const showHeaderPaths = ['/진행도', 'todo리스트', '커뮤니티', '마이']; // 나중에 실제 경로로 변경 필요
  const shouldShowHeader = showHeaderPaths.includes(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Outlet />
    </>
  );
}

const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 1, 1, 0] },
  transition: { duration: 2, times: [0, 0.25, 0.75, 1] },
};

const fadeInOutWithDelay = {
  ...fadeInOut,
  transition: { ...fadeInOut.transition, delay: 2 },
};

const backgroundFade = { duration: 2, delay: 4 };
const delayedMove = { duration: 2, delay: 5 };

const Container = styled(motion.div)<{ $clickable: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
`;


const LogoBox = styled(motion.img)`
  position: absolute;
`;

const TextBox = styled(motion.div)`
  color: white;
  font-size: x-large;
  margin-top: 16px;
  position: absolute;
  text-align: center;

  & > span {
    font-size: 64px;
  }

  & > h1 {
    font-size: 128px;
  }
`;

const AbsoluteImage = styled(motion.img)`
  position: absolute;
`;

const MainBox = styled(motion.main)`
  width: 788px;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const TouchToStart = styled.div`
  position: absolute;
  bottom: 80px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #838282;
  animation: blink 1.2s infinite;
  cursor: pointer;

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.2; }
    100% { opacity: 1; }
  }
`;

const Flower1 = styled(AbsoluteImage)``;
const Flower2 = styled(AbsoluteImage)``;
const Waguri1 = styled(AbsoluteImage)``;
const TextLogo = styled(AbsoluteImage)``;