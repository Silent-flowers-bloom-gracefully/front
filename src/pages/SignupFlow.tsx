import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/button/Button";
import Choose from "../components/choose/Choose";
import Input from "../components/input/Input";
import Line from "../components/line/Line";
import { useAuth } from "../context/AuthContext";
import { saveNickname } from "../utils/nickname";

const dummyLines = [
  {
    name: "????",
    description: "새로운 친구인가?\n우리 친해지자! 친해지려면 먼저 이름을 알아야겠지?"
  },
  {
    name: "카오루코 와구리",
    description: "나는 카오루코 와구리야!\n만나서 반가워. 너의 이름은 뭐야??"
  },
  {
    name: "",
    description: ""
  }
];

export default function SignupFlow() {
  const navigate = useNavigate();
  const { signupData, setSignupData } = useAuth();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showChoose, setShowChoose] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [nickname, setNickname] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [showAutoName, setShowAutoName] = useState(false);

  const handleLineClick = () => {
    if (currentIdx === 1) {
      setShowChoose(true);
    } else if (currentIdx === 2) {
      navigate("/selectbuket");
    } else {
      setCurrentIdx((prev) => (prev + 1) % dummyLines.length);
    }
  };

  const handleChooseClick = () => {
    setShowChoose(false);
    setShowNameInput(true);
  };

  const handleAutoNameClick = () => {
    setShowChoose(false);
    setShowAutoName(true);
    setTimeout(() => {
      setShowAutoName(false);
      const autoNickname = "이태영";
      setSignupData(prev => ({
        ...prev,
        nickname: autoNickname
      }));
      saveNickname(autoNickname);
      dummyLines[2] = {
        name: "카오루코 와구리",
        description: "이태영!! 정말 멋진 이름이야.\n이제 버킷리스트 달성하러 가보자고!"
      };
      setCurrentIdx(2);
    }, 2000);
  };

  const handleNameSubmit = () => {
    if (nickname.trim()) {
      setIsNameSubmitted(true);
      setShowNameInput(false);
      setSignupData(prev => ({
        ...prev,
        nickname
      }));
      saveNickname(nickname);
      dummyLines[2] = {
        name: "카오루코 와구리",
        description: `${nickname}!! 정말 멋진 이름이야.\n이제 버킷리스트 달성하러 가보자고!`
      };
      setCurrentIdx(2);
    }
  };

  const { name, description } = dummyLines[currentIdx];

  return (
    <Container>
      <MainBox>
        <Bg src="/src/assets/bg.png" alt="" />
        <LineContainer>
          <ImageContainer>
            <Logo src="/src/assets/TextLogo.png" />
            <Character src="/src/assets/waguri6.png" alt="" />
            <Line
              name={name}
              description={description}
              onClick={handleLineClick}
            />
          </ImageContainer>
        </LineContainer>
        {showChoose && (
          <Choose 
            title="선택해 주세요" 
            span="내 이름은...." 
            span2="안 알려주지~~"
            onChooseClick={handleChooseClick}
            onAutoNameClick={handleAutoNameClick}
          />
        )}
        {showNameInput && (
          <NameInputContainer>
            <NameInputTitle>닉네임을 입력해 주세요</NameInputTitle>
            <Input 
              label=""
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button text="확인" onClick={handleNameSubmit} />
          </NameInputContainer>
        )}
        {showAutoName && (
          <AutoNameContainer>
            <AutoNameText>닉네임이 자동으로 "이태영"님으로 설정되었습니다</AutoNameText>
          </AutoNameContainer>
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

const NameInputContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  padding-top: 200px;
`;

const NameInputTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-top: 300px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const AutoNameContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
`;

const AutoNameText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;