import styled from "styled-components";

interface ButtonProps {
  text: string;
}

const Button = ({text}: ButtonProps) => {
  return (
    <StyledButton>
      <StyledSpan>{text}</StyledSpan>
    </StyledButton>
  );
};

const StyledSpan = styled.span`
  color: white;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
`;

const StyledButton = styled.button`
  width: 400px;
  height: 80px;
  background: linear-gradient(179deg, #8465AA 22%, #6736A2 100%);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`;

export default Button;