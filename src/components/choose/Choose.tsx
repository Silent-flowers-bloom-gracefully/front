import styled from "styled-components";
import FlowButton from "../button/FlowButton";

interface ChooseProps{
  title: string;
  span: string;
  span2?: string;
  onChooseClick?: () => void;
  onAutoNameClick?: () => void;
}

const Choose = ({title, span, span2, onChooseClick, onAutoNameClick}: ChooseProps) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      <FlowButton span={span} onClick={onChooseClick}/>
      <FlowButton span={span2} onClick={onAutoNameClick}/>
    </Wrapper>
  )
}

const Title = styled.span`
  font-family: HSBombaramTTFRegular, sans-serif, Arial;
  font-size: 40px;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: #fff;
  width: 788px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export default Choose;