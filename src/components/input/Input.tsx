import styled from "styled-components";

interface InputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({label, value, onChange}: InputProps) => {
  return(
    <InputContainer>
      <Label>{label}</Label>
      <InputComponent value={value} onChange={onChange}/>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #000;
`;

const InputComponent = styled.input`
  background-color: #fff;
  width: 527px;
  height: 50px;
  padding: 8px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;
  outline: none;
  font-size: 16px;

  &:focus {
    border: 1px solid #A558FF;
  }
`;

export default Input;