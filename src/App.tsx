import { motion } from "framer-motion";
import styled from "styled-components";
import logoUrl from "./assets/Logo.png";
import flower1Url from "./assets/flower1.png";
import waguri1Url from "./assets/waguri1.png";
import flower2Url from "./assets/flower2.png";
import textLogoUrl from "./assets/TextLogo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClickAnywhere = () => {
    if(isVisible){
      setIsVisible(false);
      navigate("/main");
    }
  }

  return (
    <Container
      $clickable={isVisible}
      onClick={handleClickAnywhere}
      animate={{ backgroundColor: "#EED8F6" }}
      transition={backgroundFade}
    >
      <LogoBox src={logoUrl} alt="Character" {...fadeInOut} />
      <TextBox {...fadeInOutWithDelay}>
        <span>Team</span>
        <br />
        <h1>Waguri</h1>
      </TextBox>

      <MainBox
        animate={{ backgroundColor: "#F9E8FF", opacity: 1 }}
        transition={backgroundFade}
      >
        <Flower1
          src={flower1Url}
          alt="flower1"
          initial={{ top: -483 }}
          animate={{ top: 0 }}
          transition={delayedMove}
        />
        <Flower2
          src={flower2Url}
          alt="flower2"
          initial={{ left: -192, bottom: 0 }}
          animate={{ left: 0 }}
          transition={delayedMove}
        />
        <Waguri1
          src={waguri1Url}
          alt="waguri1"
          initial={{ right: 0, bottom: -758 }}
          animate={{ bottom: -40 }}
          transition={delayedMove}
        />
        <TextLogo
          src={textLogoUrl}
          alt="textLogo"
          initial={{ top: 230, left: -500 }}
          animate={{ left: 0 }}
          transition={delayedMove}
        />
        {isVisible && <TouchToStart>Touch to Start</TouchToStart>}
      </MainBox>
    </Container>
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
  color: #707070;
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