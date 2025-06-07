import styled from 'styled-components';
import Container from '../components/Container';
import { useState } from 'react';
import CheckBox from '../components/button/CheckBox';

type Category = '여행' | '문화' | '건강' | '자연' | '음식';

type Todo = {
  id: number;
  content: string;
  isSucceed: boolean;
};

type BucketList = {
  id: number;
  content: string;
  todo: Todo[];
};
const CategoryItem: Category[] = ['여행', '문화', '건강', '자연', '음식'];

const Todolist = () => {
  const [selectCategory, setSelectCategory] = useState<Category>('여행');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [bucketListItem, setBucketListItem] = useState<BucketList[]>([]);

  const handleCategoryClick = (category: Category) => {
    setSelectCategory(category);
  };

  const handleAddBucketList = () => {
    const newBucketList: BucketList = {
      id: bucketListItem.length + 1,
      content: '새로운 버킷리스트',
      todo: [
        {
          id: 1,
          content: '새로운 할 일',
          isSucceed: false,
        },
      ],
    };
    setBucketListItem([...bucketListItem, newBucketList]);
  };

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(!isEditing);
    } else {
      setBucketListItem(
        bucketListItem.map(bucketList => ({
          ...bucketList,
          todo: bucketList.todo.filter(todo => todo.content.length !== 0),
        }))
      );
      setIsEditing(!isEditing);
    }
  };

  const toggleTodoSuccess = (bucketIndex: number, todoIndex: number) => {
    const updatedBucketList = bucketListItem.map((bucket, i) => {
      if (i === bucketIndex) {
        const updatedTodos = bucket.todo.map((todo, j) => {
          if (j === todoIndex) {
            return {
              ...todo,
              isSucceed: !todo.isSucceed,
            };
          }
          return todo;
        });
        return {
          ...bucket,
          todo: updatedTodos,
        };
      }
      return bucket;
    });

    setBucketListItem(updatedBucketList);
  };

  const handleDelete = (index: number) => {
    setBucketListItem(bucketListItem.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Wrapper>
        <Categories>
          <p>세부 계획을 확인하고 싶으신 버킷리스트를 선택해주세요</p>
          <ul>
            {CategoryItem.map(category => (
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
        {bucketListItem.length === 0 ? (
          <EmptyState>
            <AddButton onClick={handleAddBucketList}>
              + 새로운 버킷리스트 추가하기
            </AddButton>
          </EmptyState>
        ) : (
          <>
            {bucketListItem.map((bucketList, i) => (
              <BucketList key={bucketList.id}>
                <BucketListTitle>
                  <p>{bucketList.content}</p>
                  <div>
                    <button onClick={handleEdit}>
                      {isEditing ? '완료' : '수정'}
                    </button>
                    <button onClick={() => handleDelete(i)}>삭제</button>
                  </div>
                </BucketListTitle>
                {bucketList.todo.map((todo, j) => {
                  if (!isEditing) {
                    return (
                      <TodoList key={todo.id}>
                        <CheckBox onClick={() => toggleTodoSuccess(i, j)} />
                        <span>{todo.content}</span>
                      </TodoList>
                    );
                  } else {
                    return (
                      <TodoList key={todo.id}>
                        <CheckBox />
                        <input
                          placeholder={todo.content}
                          onChange={e => {
                            const newList = bucketListItem.map((el, index) => {
                              if (index === i) {
                                const updatedTodos = el.todo.map((todo, k) => {
                                  if (k === j) {
                                    return {
                                      ...todo,
                                      content: e.target.value,
                                    };
                                  }
                                  return todo;
                                });
                                return {
                                  ...el,
                                  todo: updatedTodos,
                                };
                              }
                              return el;
                            });
                            setBucketListItem(newList);
                          }}
                        />
                      </TodoList>
                    );
                  }
                })}
                {isEditing && (
                  <button
                    onClick={() => {
                      const newList = bucketListItem.map((el, index) => {
                        if (index === i) {
                          return {
                            ...el,
                            todo: [
                              ...el.todo,
                              {
                                id: el.todo.length + 1,
                                content: '',
                                isSucceed: false,
                              },
                            ],
                          };
                        }
                        return el;
                      });
                      setBucketListItem(newList);
                    }}
                  >
                    추가
                  </button>
                )}
              </BucketList>
            ))}
            <AddButton onClick={handleAddBucketList}>
              + 새로운 버킷리스트 추가하기
            </AddButton>
          </>
        )}
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

const BucketListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: large;
  font-weight: bold;

  & > div {
    display: flex;
    gap: 10px;
  }

  & button {
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

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AddButton = styled.button`
  padding: 16px 32px;
  background-color: #a558ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8a3fd8;
  }
`;
