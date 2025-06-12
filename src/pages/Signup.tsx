import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Back from "../components/back/Back";
import AuthButton from "../components/button/AuthButton";
import Input from "../components/input/Input";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { setSignupData } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 회원가입 데이터 저장
    setSignupData({
      username,
      password,
      nickname: "" // 닉네임은 회원가입 플로우에서 입력
    });

    // 회원가입 플로우로 이동
    navigate("/signupflow");
  };

  return(
    <Container>
      <MainBox>
        <Back span="회원가입"/>
        <TextLogo src="/src/assets/TextLogo.png" alt=""/>
        <InputContainer>
          <Input 
            label="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={error}
          />
          <Input 
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
          />
        </InputContainer>
        <AuthButton 
          text="다음" 
          onClick={handleSignup}
        />
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