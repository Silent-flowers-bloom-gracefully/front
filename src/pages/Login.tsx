import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Back from '../components/back/Back';
import AuthButton from '../components/button/AuthButton';
import Input from '../components/input/Input';

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

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    navigate('/loginflow');
  };

  return (
    <Container>
      <MainBox>
        <Back span="로그인"/>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            error={error}
          />
        </InputContainer>
        {error && <ErrorText>{error}</ErrorText>}
        <AuthButton 
          text="로그인" 
          onClick={handleLogin}
        />
      </MainBox>
    </Container>
  );
} 