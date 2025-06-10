import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Check from '../../assets/check';

interface PropsType {
  onClick?: () => void;
  width?: string;
  height?: string;
  checked?: boolean;
}

const CheckBox = ({
  onClick,
  width = '32px',
  height = '32px',
  checked = false,
}: PropsType) => {
  const [state, setState] = useState<boolean>(checked);

  useEffect(() => {
    setState(checked);
  }, [checked]);

  const handleClick = () => {
    if (onClick) onClick();
    setState(!state);
  };

  return (
    <Container
      onClick={handleClick}
      width={width}
      height={height}
      isClicked={state}
    >
      <Check />
    </Container>
  );
};

const Container = styled.div<{
  width: string;
  height: string;
  isClicked: boolean;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 100%;
  background-color: ${({ isClicked }) => (isClicked ? '#26EA6A' : '#fff')};
  border: 1px solid #a0a0a0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default CheckBox;
