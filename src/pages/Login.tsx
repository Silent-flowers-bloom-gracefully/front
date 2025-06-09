import styled from "styled-components";
import Input from "../components/input/Input";
import AuthButton from "../components/button/AuthButton";
import Back from "../components/back/Back";

export default function Login() {
  return(
    <Container>
      <MainBox>
        <Back span="회원가입"/>
        <TextLogo src="/src/assets/TextLogo.png" alt=""/>
        <InputContainer>
          <Input label="아이디"/>
          <Input label="비밀번호"/>
        </InputContainer>
        <AuthButton text="회원가입" />
      </MainBox>
    </Container>
  )
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
  gap: 100px;
  background-color: #FCF8FF;
  border: 0px 1px 0px 1px solid #E3E3E3;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const TextLogo = styled.img`
  width: 322.43px;
  height: 123px;
`;