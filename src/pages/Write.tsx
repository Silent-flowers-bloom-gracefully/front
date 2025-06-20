import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Leftarrow from "../assets/leftarrow.png";
import waguri8Url from '../assets/waguri8.png';
import Button from "../components/button/Button";
import Container from '../components/Container';
import { getNickname } from '../utils/nickname';

const POSTS_STORAGE_KEY = 'communityPosts';

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  author: string;
}

const WritePage = () => {
  const allTags = ["여행", "문화", "건강", "자연", "음식"];
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [showComplete, setShowComplete] = useState(false);
  const navigate = useNavigate();
  const nickname = getNickname();

  const handleComplete = () => {
    if (selectedTag && content && title) {
      const savedPosts = JSON.parse(localStorage.getItem(POSTS_STORAGE_KEY) || '[]');
      const newPost: Post = {
        id: Date.now(),
        title,
        content,
        tags: [selectedTag],
        createdAt: new Date().toISOString(),
        author: nickname
      };
      
      localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify([...savedPosts, newPost]));
      setShowComplete(true);
      setTimeout(() => {
        navigate('/community');
      }, 2000);
    }
  };

  return (
    <Container hasHeader={false}>
      <SelectBox>
        <HeaderRow>
          <BackButton onClick={() => window.history.back()}>
            <img src={Leftarrow} alt="뒤로가기" />
          </BackButton>
          <Title>커뮤니티 글 작성하기</Title>
        </HeaderRow>

        <Categories>
          <TagGuide>글과 관련한 태그를 선택해주세요</TagGuide>
          <CategoryWrapper>
            <ul>
              {allTags.map(tag => (
                <Category
                  key={tag}
                  isSelect={selectedTag === tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                >
                  {tag}
                </Category>
              ))}
            </ul>
          </CategoryWrapper>
        </Categories>

        <TitleInput
          placeholder="제목을 입력하세요..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <TextArea
          placeholder="내용을 입력하세요..."
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <ButtonWrapper>
          <Button text="완료" size="big" onClick={handleComplete} />
        </ButtonWrapper>

        {showComplete && (
          <BlackModal>
            <img src={waguri8Url} width={400} />
            <SpeechBubble>
              <p>
                사람들하고 커뮤니티도 하고!!<br />
                너 완전 대단해♡
              </p>
            </SpeechBubble>
          </BlackModal>
        )}
      </SelectBox>
    </Container>
  );
};

export default WritePage;

const SelectBox = styled.main`
  width: 100%;
  max-width: 788px;
  min-height: 100vh;
  border: 1px solid #e3e3e3;
  padding: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

const Categories = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;

  & > ul {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
`;

interface CategoryProps {
  isSelect: boolean;
}

const Category = styled.li<CategoryProps>`
  padding: 12px 30px;
  border: 1px solid #a558ff;
  border-radius: 25px;
  cursor: pointer;
  color: ${({ isSelect }) => (isSelect ? 'white' : '#a558ff')};
  background-color: ${({ isSelect }) => (isSelect ? '#a558ff' : 'transparent')};
  list-style: none;
`;

const TagGuide = styled.p`
  font-size: 20px;
  margin: 0;
  color: #a0a0a0;
`;

const TextArea = styled.textarea`
  width: 95%;
  min-height: 400px;
  padding: 16px;
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  background: #f9fafb;
  outline: none;
  font-size: 16px;
  resize: none;
  color: #4b5563;
  line-height: 1.5;
  margin-top: 20px;

  &::placeholder {
    color: #6b7280;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  width: 100%;
`;

const BlackModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: flex-end;
  padding: 41px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & > img {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
`;

const SpeechBubble = styled.div`
  background-color: white;
  padding: 30px 40px;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;
  border: 2px solid #000;
  min-width: 400px;
  top: -500px;
  right: 50px;

  p {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
    color: #333;
    font-family: 'HSBombaram3.0_Regular';
  }
`;

const TitleInput = styled.input`
  width: 95%;
  padding: 16px;
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  background: #f9fafb;
  outline: none;
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 16px;

  &::placeholder {
    color: #6b7280;
  }
`;
