import { useState } from "react";
import styled from "styled-components";
import Leftarrow from "../assets/leftarrow.png"
import Button from "../components/button/Button"
// import Header from "../components/Header"

const WritePage = () => {
  const allTags = ["여행", "문화", "건강", "자연", "음식"];
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [content, setContent] = useState("");

  return (
    <Container>
      <MainBox>
        {/* <Header /> */}
        <Contents>
          <HeaderRow>
            <BackButton onClick={() => window.history.back()}>
              <img src={Leftarrow} alt="뒤로가기" />
            </BackButton>
            <Title>커뮤니티 글 작성하기</Title>
          </HeaderRow>

          <TagGuide>글과 관련한 태그를 선택해주세요</TagGuide>

          <TagList>
            {allTags.map(tag => (
              <TagButton
                key={tag}
                selected={selectedTag === tag}
                onClick={() =>
                  setSelectedTag(selectedTag === tag ? null : tag)
                }
              >
                {tag}
              </TagButton>
            ))}
          </TagList>

          <TextArea
            placeholder="내용을 입력하세요..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />

          <Button text="완료" />
        </Contents>
      </MainBox>
      
    </Container>
  );
};

export default WritePage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 788px;
  height: 100%;
  border-style: solid;
  border-color: #e3e3e3;
  border-width: 0px 1px;
`;

const Contents = styled.div`
  margin-top: 140px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  left: -20px;
`;

const TagGuide = styled.p`
  font-size: 20px;
  margin-bottom: 16px;
`;


const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`;

const TagButton = styled.button<{ selected: boolean }>`
  width: 100px;
  height: 44px;
  padding: 6px 12px;
  border-radius: 22px;
  font-size: 16px;
  border: 1px solid ${({ selected }) => (selected ? "#A558FF" : "#A0A0A0")};
  background-color: #fff;
  color: ${({ selected }) => (selected ? "#A558FF" : "#A0A0A0")};
  cursor: pointer;
  transition: all 0.2s;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 400px;
  padding: 8px;
  border: 1px solid #A0A0A0;
  border-radius: 4px;
  background: transparent;
  outline: none;
  font-size: 16px;
  margin-bottom: 24px;
  resize: none;
`;
