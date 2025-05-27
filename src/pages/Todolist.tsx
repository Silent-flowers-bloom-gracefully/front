import styled from 'styled-components';
import Container from '../components/Container';
import { useState } from 'react';
import CheckBox from '../components/button/CheckBox';

type Category = '여행' | '문화' | '건강' | '자연' | '음식';

const CategoryItem: Category[] = ['여행', '문화', '건강', '자연', '음식'];

const Todolist = () => {
  const [selectCategory, setSelectCategory] = useState<Category>('여행');

  const handleCategoryClick = (category: Category) => {
    setSelectCategory(category);
  };

  return (
    <Container>
      <Wrapper>
        <Categories>
          <p>세부 계획을 확인하고 싶으신 버킷리스트를 선택해주세요</p>
          <ul>
            {CategoryItem.map(category => (
              <Category
                isSelect={selectCategory === category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Category>
            ))}
          </ul>
        </Categories>
        <BucketList>
          <BucketListTitle>
            <p>파리 여행 준비</p>
            <button>수정</button>
          </BucketListTitle>
          <TodoList>
            <CheckBox />
            <span>알바 구하기</span>
          </TodoList>
        </BucketList>
      </Wrapper>
    </Container>
  );
};

export default Todolist;

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
  background-color: ${({ isSelect }) => (isSelect ? '#a558ff' : 'transfer')};
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

const BucketListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: large;
  font-weight: bold;

  & > button {
    border: 0;
    background-color: transparent;
    font-size: large;
    color: #a0a0a0;
    cursor: pointer;
    padding: 0;
  }
`;

const TodoList = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
