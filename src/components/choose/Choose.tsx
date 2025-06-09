import styled from "styled-components";
import FlowButton from "../button/FlowButton";

interface ChooseProps{
  title: string;
  span: string;
  span2?: string;
}

const Choose = ({title, span, span2}: ChooseProps) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      <FlowButton span={span}/>
      <FlowButton span={span2}/>
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