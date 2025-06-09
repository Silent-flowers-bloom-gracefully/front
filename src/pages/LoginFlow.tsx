import styled from "styled-components";
import Line from "../components/line/Line";
import { useState } from "react";
import Choose from "../components/choose/Choose";

const dummyLines = [
  {
    name: "????",
    description: "새로운 친구인가?\n우리 친해지자! 친해지려면 먼저 이름을 알아야겠지?"
  },
  {
    name: "카오루코 와구리",
    description: "나는 카오루코 와구리야!\n만나서 반가워. 너의 이름은 뭐야??"
  },
];

export default function LoginFlow() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleLineClick = () => {
    setCurrentIdx((prev) => (prev + 1) % dummyLines.length);
  };

  const { name, description } = dummyLines[currentIdx];

  return (
    <Container>
      <MainBox>
        <Bg src="/src/assets/bg.png" alt="" />
        <LineContainer>
          <ImageContainer>
            <Logo src="/src/assets/TextLogo.png" />
            <Character src="/src/assets/waguri3.png" alt="" />
            <Line
              name={name}
              description={description}
              onClick={handleLineClick}
            />
          </ImageContainer>
        </LineContainer>
        {/* <Choose title="선택해 주세요" span="내 이름은...." span2="안 알려주지~~"/> */}
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
`

const Bg = styled.img`
  width: 788px;
  height: 100%;
`

const Logo = styled.img`
  width: 160px;
  height: 60.86px;
  position: absolute;
  top: 15px;
  left: 15px;
`

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