import styled from "styled-components";

interface LineProps{
  name: string;
  description: string;
  onClick?: () => void;
}

const Line = ({name, description, onClick}: LineProps) => {
  return (
    <Wrapper onClick={onClick}>
      <BackgroundBox />
      <TopTextWrapper>
        <TitleText>{name}</TitleText>
      </TopTextWrapper>
      <BottomTextWrapper>
        <DescriptionText>{description}</DescriptionText>
      </BottomTextWrapper>
    </Wrapper>
  );
};

const BackgroundBox = styled.div`
  width: 788px;
  height: 249px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: linear-gradient(0deg, rgba(64.60, 7.83, 55.14, 0.77) 0%, rgba(222.68, 149.25, 201.88, 0.77) 100%);
`;

const TitleText = styled.span`
  color: white;
  font-size: 20px;
  font-family: HSBombaramTTFRegular, sans-serif, Arial;
  word-wrap: break-word;
`;

const DescriptionText = styled.span`
  color: white;
  font-size: 30px;
  font-family: HSBombaramTTFRegular, sans-serif, Arial;
  word-wrap: break-word;
  line-height: 1.4;
  white-space: pre-line;
`;

const TopTextWrapper = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const BottomTextWrapper = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  left: 0px;
  top: 58px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const Wrapper = styled.div`
  width: 788px;
  height: 249px;
  position: absolute;
  bottom: 0%;
  cursor: pointer;
  clip-path: polygon(
    0 0,
    calc(100% - 90px) 0,
    100% 30px,
    100% 100%,
    90px 100%,
    0 calc(100% - 30px)
  );
`;

export default Line;
