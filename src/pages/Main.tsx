import styled from "styled-components";
import Button from "../components/button/Button";

const Main = () => {
  return(
    <Container>
      <MainBox>
      <Logo src="/src/assets/Logo.png" alt="" />
      <Girl src="/src/assets/V.png" alt=""/>
      <Talk src="/src/assets/talk.png" alt=""/>
      <Buttoncontainer>
        <Button text="로그인" />
        <Button text="회원가입" />
      </Buttoncontainer>
      </MainBox>
    </Container>
  )

};

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

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
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

export default Main;