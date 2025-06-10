import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import writeButtonImg from '../../assets/WriteButton.png';

const WriteButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/write');
  };

  return (
    <ButtonImg onClick={handleClick} src={writeButtonImg} alt="작성 버튼" />
  );
};

const ButtonImg = styled.img`
  cursor: pointer;
`;

export default WriteButton;
