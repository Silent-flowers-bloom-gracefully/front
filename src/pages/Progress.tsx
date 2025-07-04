import styled from 'styled-components';
import Container from '../components/Container';
import { useEffect, useState } from 'react';
import { getNickname } from '../utils/nickname';

type Category = string;

type Todo = {
  id: number;
  content: string;
  isSucceed: boolean;
};

type BucketList = {
  id: number;
  content: string;
  todo: Todo[];
  category: Category;
};

const STORAGE_KEY = 'bucketListItems';

export default function Progress() {
  const [categoryItems, setCategoryItems] = useState<Category[]>([]);
  const [selectCategory, setSelectCategory] = useState<Category>('');
  const [bucketListItem] = useState<BucketList[]>(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY);
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    const saved = localStorage.getItem('selectedCategories');
    if (saved) {
      const parsed = JSON.parse(saved);
      setCategoryItems(parsed);
      if (parsed.length > 0) {
        setSelectCategory(parsed[0]);
      }
    }
  }, []);

  const handleCategoryClick = (category: Category) => {
    setSelectCategory(category);
  };

  const filteredBucketList = bucketListItem.filter(
    item => item.category === selectCategory
  );

  const calculateProgress = (todos: Todo[]) => {
    if (todos.length === 0) return 0;
    const completedTodos = todos.filter(todo => todo.isSucceed).length;
    return Math.round((completedTodos / todos.length) * 100);
  };

  return (
    <Container>
      <Wrapper>
        <Categories>
          <p>현재 {getNickname()} 님의 버킷리스트</p>
          <ul>
            {categoryItems.map(category => (
              <Category
                key={category}
                isSelect={selectCategory === category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Category>
            ))}
          </ul>
        </Categories>
        {filteredBucketList.length === 0 ? (
          <EmptyState>
            <p>아직 {selectCategory} 카테고리의 버킷리스트가 없습니다.</p>
          </EmptyState>
        ) : (
          <ProgressList>
            {filteredBucketList.map(bucketList => {
              const progress = calculateProgress(bucketList.todo);
              return (
                <ProgressItem key={bucketList.id}>
                  <ProgressHeader>
                    <h3>{bucketList.content}</h3>
                    <ProgressPercentage>{progress}%</ProgressPercentage>
                  </ProgressHeader>
                  <ProgressBar>
                    <ProgressFill progress={progress} />
                  </ProgressBar>
                  <TodoCount>
                    완료된 할 일:{' '}
                    {bucketList.todo.filter(todo => todo.isSucceed).length} /{' '}
                    {bucketList.todo.length}
                  </TodoCount>
                </ProgressItem>
              );
            })}
          </ProgressList>
        )}
      </Wrapper>
    </Container>
  );
}

const Categories = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > p {
    color: #a0a0a0;
  }

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

const Wrapper = styled.div`
  width: calc(100% - 62px);
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BucketList = styled.section`
  width: calc(100% - 62px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #f9fafb;
  padding: 32px;
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

const ProgressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const ProgressItem = styled.div`
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
`;

const ProgressPercentage = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #a558ff;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
`;

interface ProgressFillProps {
  progress: number;
}

const ProgressFill = styled.div<ProgressFillProps>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #a558ff;
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`;

const TodoCount = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0;
`;
