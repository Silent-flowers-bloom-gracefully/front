import styled from "styled-components";

interface FlowButtonProps {
  span: string;
  onClick?: () => void;
}

const FlowButton = ({span, onClick}: FlowButtonProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Span>{span}</Span>
    </Wrapper>
  );
};

const Span = styled.span`
  color: white;
  font-size: 30px;
  font-family: HSBombaramTTFRegular, sans-serif, Arial;
  word-wrap: break-word;
  line-height: 1.4;
  white-space: pre-line;
`;

const Wrapper = styled.div`
  cursor: pointer;
  width: 650px;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(64.60, 7.83, 55.14, 0.77) 0%, rgba(222.68, 149.25, 201.88, 0.77) 100%);
  clip-path: polygon(
  0 0,
  calc(100% - 55px) 0,
  100% 40px,
  100% 100%,
  55px 100%,
  0 calc(100% - 40px)
  );
  &:hover{
    background: linear-gradient(0deg, rgba(100, 40, 90, 0.77) 0%, rgba(230, 170, 210, 0.77) 100%);
    transform: translate(-5px, -5px);
  }
`;

export default FlowButton;