import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/button/Button";

export default function Main() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login")
  }

  const handleSignup = () => {
    navigate("/signup")
  }

  return(
    <Container>
      <MainBox>
      <Logo src="/src/assets/BTextLogo.png" alt="" />
      <Girl src="/src/assets/V.png" alt=""/>
      <Talk src="/src/assets/talk.png" alt=""/>
      <ButtonContainer>
        <Button text="로그인" onClick={handleLogin}/>
        <Button text="회원가입" onClick={handleSignup}/>
      </ButtonContainer>
      </MainBox>
    </Container>
  )

};

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
  background-color: #FCF8FF;
  border: 0px 1px 0px 1px solid #E3E3E3;
`;

const Buttoncontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  right: 37px;
  bottom: 53px;
`;

const Logo = styled.img`
  width: 535px;
  height: 200px;
  position: absolute;
  top: 129px;
`;

const Girl = styled.img`
  position: absolute;
  left: 0px;
  bottom: 0px;
`

const Talk = styled.img`
  position: absolute;
  left: 220px;
  bottom: 410px;
`;