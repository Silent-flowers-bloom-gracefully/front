import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  size?: 'normal' | 'big';
}

const Button = ({ text, onClick, size = 'normal' }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} $size={size}>
      <Span $size={size}>{text}</Span>
    </ButtonContainer>
  );
};

interface StyledProps {
  $size: 'normal' | 'big';
}

const Span = styled.span<StyledProps>`
  color: white;
  font-size: ${({ $size }) => ($size === 'big' ? '32px' : '24px')};
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
`;

const ButtonContainer = styled.button<StyledProps>`
  width: ${({ $size }) => ($size === 'big' ? '100%' : '400px')};
  height: ${({ $size }) => ($size === 'big' ? '80px' : '60px')};
  background: linear-gradient(179deg, #8465AA 22%, #6736A2 100%);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;

  &:hover{
    background: linear-gradient(179deg, #9372ba 22%, #7742b8 100%);
  }
`;

export default Button;