import { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { getNickname } from '../utils/nickname';

type Category = '여행' | '문화' | '건강' | '자연' | '음식';

const CategoryItem = ['여행', '문화', '건강', '자연', '음식'];

const STORAGE_KEY = 'bucketList';

interface BucketList {
  id: number;
  category: Category;
  title: string;
  isComplete: boolean;
}

export default function Progress() {
  const [selectCategory, setSelectCategory] = useState<Category>('여행');
  const nickname = getNickname();
  const [bucketListItem] = useState<BucketList[]>(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY);
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const filteredBucketList = bucketListItem.filter(
    item => item.category === selectCategory,
  );

  return (
    <Container>
      <Wrapper>
        <Categories>
          <p>현재 {nickname} 님의 버킷리스트</p>
          <CategoryWrapper>
            <ul>
              {CategoryItem.map(category => (
                <Category
                  key={category}
                  isSelect={selectCategory === category}
                  onClick={() => setSelectCategory(category as Category)}
                >
                  {category}
                </Category>
              ))}
            </ul>
          </CategoryWrapper>
        </Categories>
        {filteredBucketList.length === 0 ? (
          <EmptyState>
            <p>아직 {selectCategory} 카테고리의 버킷리스트가 없습니다.</p>
          </EmptyState>
        ) : (
          <BucketListWrapper>
            {filteredBucketList.map(item => (
              <BucketListItem key={item.id}>
                <p>{item.title}</p>
              </BucketListItem>
            ))}
          </BucketListWrapper>
        )}
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

const BucketListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const BucketListItem = styled.div`
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 2px solid #e5e7eb;

  p {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
`;
