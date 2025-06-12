import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Choose from "../components/choose/Choose";
import Line from "../components/line/Line";

const dummyLines = [
  {
    name: "카오루코 와구리",
    description: "오랜만에 만나는 거 같아..ㅠㅜ\n그동안 잘 지냈어??",
    // TODO: 초기 이미지와 배경
    character: "/src/assets/waguri6.png",
    background: "/src/assets/bg.png"
  },
  {
    name: "카오루코 와구리",
    description: "우리 다시 버킷리스트 달성을 위해\n힘내보자!!",
    // TODO: 두 번째 대화의 이미지와 배경
    character: "/src/assets/waguri6.png",
    background: "/src/assets/bg.png"
  },
  {
    name: "",
    description: "",
    character: "/src/assets/waguri6.png",
    background: "/src/assets/bg.png"
  }
];

// 첫 번째 선택지의 대화와 이미지
const firstChoiceLines = [
  {
    name: "카오루코 와구리",
    description: "그래, 나랑 같이 화이팅!!",
    // TODO: 첫 번째 선택지의 이미지와 배경
    character: "/src/assets/D.png",
    background: "/src/assets/bg2.png"
  }
];

// 두 번째 선택지의 대화와 이미지
const secondChoiceLines = [
  {
    name: "카오루코 와구리",
    description: "ㅎㅎㅎㅎㅎㅎㅎㅎㅎ",
    // TODO: 두 번째 선택지 첫 번째 대화의 이미지와 배경
    character: "/src/assets/waguri7.png",
    background: "/src/assets/bg3.png"
  },
  {
    name: "카오루코 와구리",
    description: "어? 뭐라고? 싫 다 고?",
    // TODO: 두 번째 선택지 두 번째 대화의 이미지와 배경
    character: "/src/assets/waguri7.png",
    background: "/src/assets/bg3.png"
  },
  {
    name: "카오루코 와구리",
    description: "잠깐 눈 감아 볼래?",
    // TODO: 두 번째 선택지 세 번째 대화의 이미지와 배경
    character: "/src/assets/waguri7.png",
    background: "/src/assets/bg3.png"
  }
];

// 줌인할 때 사용할 이미지와 배경
const zoomImages = {
  // TODO: 줌인 시 사용할 이미지와 배경
  character: "/src/assets/waguri5.png",
  background: "/src/assets/bg.png"
};

export default function LoginFlow() {
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showChoose, setShowChoose] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [choiceLineIdx, setChoiceLineIdx] = useState(0);
  const [showBlackBox, setShowBlackBox] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0);

  useEffect(() => {
    const key = localStorage.getItem('key');
    if (!key) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLineClick = () => {
    if (currentIdx === 1) {
      setShowChoose(true);
    }
    setCurrentIdx((prev) => (prev + 1) % dummyLines.length);
  };

  const handleChooseClick = () => {
    setShowChoose(false);
    setSelectedChoice(0);
    setChoiceLineIdx(0);
  };

  const handleAutoClick = () => {
    setShowChoose(false);
    setSelectedChoice(1);
    setChoiceLineIdx(0);
  };

  const handleChoiceLine = () => {
    if (selectedChoice === 0) {
      // 첫 번째 선택지
      setTimeout(() => {
        const key = localStorage.getItem('key');
        if (!key) {
          navigate('/login');
          return;
        }
        navigate("/todolist");
      }, 2000);
    } else if (selectedChoice === 1) {
      // 두 번째 선택지
      if (choiceLineIdx < secondChoiceLines.length - 1) {
        setChoiceLineIdx(prev => prev + 1);
      } else {
        setShowBlackBox(true);
        // 1차 줌인
        setTimeout(() => {
          setZoomLevel(1);
          // 2차 줌인
          setTimeout(() => {
            setZoomLevel(2);
            // todolist로 이동
            setTimeout(() => {
              const key = localStorage.getItem('key');
              if (!key) {
                navigate('/login');
                return;
              }
              navigate("/todolist");
            }, 1000);
          }, 1000);
        }, 1000);
      }
    }
  };

  const getCurrentContent = () => {
    if (selectedChoice === null) {
      return {
        name: dummyLines[currentIdx].name,
        description: dummyLines[currentIdx].description,
        character: dummyLines[currentIdx].character,
        background: dummyLines[currentIdx].background
      };
    }
    
    const lines = selectedChoice === 0 ? firstChoiceLines : secondChoiceLines;
    return lines[choiceLineIdx];
  };

  const content = getCurrentContent();

  return (
    <Container>
      <MainBox>
        <Bg src={showBlackBox ? zoomImages.background : content.background} alt="" />
        <LineContainer>
          <ImageContainer>
            <Logo src="/src/assets/TextLogo.png" />
            {!showBlackBox ? (
              <>
                <Character src={content.character} alt="" />
                <Line
                  name={content.name}
                  description={content.description}
                  onClick={selectedChoice !== null ? handleChoiceLine : handleLineClick}
                />
              </>
            ) : (
              <BlackBox>
                <ZoomCharacter 
                  src={zoomImages.character}
                  alt="" 
                  $zoomLevel={zoomLevel}
                />
              </BlackBox>
            )}
          </ImageContainer>
        </LineContainer>
        {showChoose && (
          <Choose 
            title="선택해 주세요" 
            span="좋아!! 힘내보자" 
            span2="싫어.. 내가 왜?"
            onChooseClick={handleChooseClick}
            onAutoNameClick={handleAutoClick}
          />
        )}
      </MainBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 788px;
  height: 100%;
`;

const LineContainer = styled.div`
  position: absolute;
  width: 788px;
  height: 100%;
`;

const Bg = styled.img`
  width: 788px;
  height: 100%;
`;

const Logo = styled.img`
  width: 160px;
  height: 60.86px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Character = styled.img`
  position: absolute;
  width: 517px;
  height: 794.31px;
  bottom: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 788px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const BlackBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ZoomCharacter = styled.img<{ $zoomLevel: number }>`
  width: ${({ $zoomLevel }) => {
    switch($zoomLevel) {
      case 0: return '450px'; // MainBox보다 약간 작게
      case 1: return '600px'; // 1차 줌인
      case 2: return '900px'; // 2차 줌인 (상체와 얼굴만)
      default: return '450px';
    }
  }};
  height: auto;
  transition: all 1s ease;
  object-fit: cover;
  object-position: top; // 상체와 얼굴 부분 보이도록
`; 