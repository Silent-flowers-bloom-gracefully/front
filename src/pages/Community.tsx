import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import WriteButton from '../components/button/WriteButton';
import { getNickname } from '../utils/nickname';

const POSTS_STORAGE_KEY = 'communityPosts';

// Todolist와 동일한 카테고리
// const CategoryItem = ['전체', '여행', '문화', '건강', '자연', '음식'];

type Post = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  author: string;
};

export default function Community() {
  const [categoryItems, setCategoryItems] = useState<string[]>(['전체']);
  const [selectCategory, setSelectCategory] = useState<string>('전체');
  const [posts, setPosts] = useState<Post[]>([]);
  const nickname = getNickname();

  useEffect(() => {
    const saved = localStorage.getItem('selectedCategories');
    if (saved) {
      const parsed = JSON.parse(saved);
      setCategoryItems(['전체', ...parsed]);
    }
  }, []);

  useEffect(() => {
    const savedPosts = JSON.parse(
      localStorage.getItem(POSTS_STORAGE_KEY) || '[]'
    );
    setPosts(savedPosts);
  }, []);

  // 카테고리로 게시글 필터링
  const filteredPosts =
    selectCategory === '전체'
      ? posts
      : posts.filter(post => post.tags.includes(selectCategory));

  return (
    <Container>
      <Wrapper>
        <Categories>
          <p>현재 {nickname} 님의 커뮤니티</p>
          <CategoryWrapper>
            <ul>
              {categoryItems.map(category => (
                <Category
                  key={category}
                  isSelect={selectCategory === category}
                  onClick={() => setSelectCategory(category)}
                >
                  {category}
                </Category>
              ))}
            </ul>
          </CategoryWrapper>
        </Categories>
        {filteredPosts.length === 0 ? (
          <EmptyState>
            <p>아직 {selectCategory} 카테고리의 게시글이 없습니다.</p>
          </EmptyState>
        ) : (
          <PostList>
            {filteredPosts.map(post => (
              <PostItem key={post.id}>
                <PostHeader>
                  <PostTitle>{post.title}</PostTitle>
                  <PostTags>
                    {post.tags.map(tag => (
                      <PostTag key={tag}>{tag}</PostTag>
                    ))}
                  </PostTags>
                </PostHeader>
                <PostContent>{post.content}</PostContent>
              </PostItem>
            ))}
          </PostList>
        )}
        <WriteButtonWrapper>
          <WriteButton />
        </WriteButtonWrapper>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 62px);
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Categories = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > p {
    color: #a0a0a0;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > ul {
    display: flex;
    gap: 16px;
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
`;

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #f9fafb;
  border-radius: 12px;

  p {
    color: #6b7280;
    font-size: 16px;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const PostItem = styled.div`
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 2px solid #e5e7eb;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const PostContent = styled.p`
  font-size: 16px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
`;

const PostTags = styled.div`
  display: flex;
  gap: 8px;
`;

const PostTag = styled.span`
  padding: 6px 16px;
  border: 1px solid #a558ff;
  border-radius: 25px;
  color: #a558ff;
  font-size: 14px;
  background-color: transparent;
`;

const WriteButtonWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
`;
