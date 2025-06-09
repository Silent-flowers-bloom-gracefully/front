import styled from "styled-components";

interface InputProps {
  label: string;
}

const Input = ({label}: InputProps) => {
  return(
    <InputContainer>
      <Label>{label}</Label>
      <InputComponent/>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const InputComponent = styled.input`
  width: 527px;
  height: 66px;
  border: 2px solid #B6B6B6;
  border-radius: 10px;
  padding-left: 15px;
  align-items: center;
  font-size: 20px;
  font-weight: 400;

  &:focus{
    border: 2px solid #A558FF;
    outline: none;
  }
`;

export default Input;