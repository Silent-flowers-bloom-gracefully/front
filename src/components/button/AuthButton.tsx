import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const AuthButton = ({ text, onClick }: ButtonProps) => {

  return (
    <ButtonContainer onClick={onClick}>
      <Span>{text}</Span>
    </ButtonContainer>
  );
};

const Span = styled.span`
  color: white;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
`;

const ButtonContainer = styled.button`
  width: 527px;
  height: 75px;
  background: #E3E3E3;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover{
    background: linear-gradient(179deg, #9372ba 22%, #7742b8 100%);
  }
`;

export default AuthButton;