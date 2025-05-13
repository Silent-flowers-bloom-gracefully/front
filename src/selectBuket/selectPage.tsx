import { styled } from 'styled-components';
import logoUrl from '../assets/TextLogo.png';
import textboxUrl from '../assets/Textbox.png';
import waguriUrl from '../assets/waguri2.png';
import waguriClickUrl from '../assets/waguri3.png';
import { useState } from 'react';

const initialCategoryList = [
  { title: '여행', isSelect: false },
  { title: '문화', isSelect: false },
  { title: '자기계발', isSelect: false },
  { title: '건강', isSelect: false },
  { title: '예술', isSelect: false },
  { title: '음식', isSelect: false },
  { title: '경제', isSelect: false },
  { title: '커리어', isSelect: false },
  { title: '인간관계', isSelect: false },
  { title: '봉사', isSelect: false },
  { title: '명상', isSelect: false },
  { title: '습관', isSelect: false },
  { title: '감정', isSelect: false },
  { title: '미래계획', isSelect: false },
  { title: '기술', isSelect: false },
  { title: '글쓰기', isSelect: false },
  { title: '공연', isSelect: false },
  { title: '연애', isSelect: false },
  { title: '가족', isSelect: false },
  { title: '자연', isSelect: false },
  { title: '동물', isSelect: false },
  { title: '언어', isSelect: false },
  { title: '자격증', isSelect: false },
  { title: '리더십', isSelect: false },
  { title: '환경', isSelect: false },
  { title: '창업', isSelect: false },
  { title: '캠페인', isSelect: false },
  { title: '시간관리', isSelect: false },
  { title: '라이프스타일', isSelect: false },
  { title: '기타', isSelect: false },
];

const SelectPage = () => {
  const [categories, setCategories] = useState(initialCategoryList);
  const [nowWaguriUrl, setWaguriUrl] = useState(waguriUrl);

  const handleCategoryClick = (title: string) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.title === title
          ? { ...category, isSelect: !category.isSelect }
          : category
      )
    );
  };

  return (
    <Container>
      <SelectBox>
        <LogoBox src={logoUrl} alt="Logo" />
        <div>
          <TitleBox>너의 버킷리스트를 선택할 시간이야</TitleBox>
          <CategoryWrapper>
            <PlaceholderBox>1개 이상을 선택해 주세요</PlaceholderBox>
            <CategoryBox>
              {categories.map(category => (
                <CategoryItem
                  key={category.title}
                  onClick={() => handleCategoryClick(category.title)}
                  isSelected={category.isSelect}
                >
                  <CategoryItemText>{category.title}</CategoryItemText>
                </CategoryItem>
              ))}
            </CategoryBox>
          </CategoryWrapper>
        </div>
        <ButtonBox>완료</ButtonBox>
      </SelectBox>
      <div>
        <TextBox>
          <img src={textboxUrl} alt="Textbox" />
          <span>
            {nowWaguriUrl === waguriUrl ? '음,' : '앗.. 나는'}
            <br /> {nowWaguriUrl === waguriUrl ? '뭐가' : '선택하면'} <br />
            {nowWaguriUrl === waguriUrl ? '좋을까?' : '안 돼!'}
          </span>
        </TextBox>
        <WaguriBox
          onClick={() => {
            setWaguriUrl(waguriClickUrl);
            setTimeout(() => {
              setWaguriUrl(waguriUrl);
            }, 1000);
          }}
        >
          <img src={nowWaguriUrl} alt="Waguri" />
        </WaguriBox>
      </div>
    </Container>
  );
};

export default SelectPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SelectBox = styled.main`
  width: 100%;
  max-width: 788px;
  height: 100%;
  border: 1px solid #e3e3e3;
  padding: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const LogoBox = styled.img`
  width: 136px;
  height: 52px;
  margin-right: auto;
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 400px;
  right: 400px;
  transform: translate(50%, 50%);

  @media (max-width: 1000px) {
    display: none;
  }

  & > img {
    width: 200px;
    height: auto;
    display: block;
  }

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    line-height: 1.5;
  }
`;

const WaguriBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  & > img {
    width: 400px;
    height: auto;
    display: block;
  }
`;

const TitleBox = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
`;

const PlaceholderBox = styled.div`
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  right: -25%;
  position: relative;
  color: #a0a0a0;
  font-size: 15px;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
`;

const CategoryItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #a558ff;
  border-radius: 25px;
  padding: 13px 0;
  min-width: 100px;
  width: fit-content;
  background-color: ${props => (props.isSelected ? '#a558ff' : 'transparent')};
  color: ${props => (props.isSelected ? '#fff' : '#a558ff')};
  font-size: 20px;
  &:hover {
    cursor: pointer;
    background-color: #cba3fb;
    color: #fff;
  }
`;

const CategoryItemText = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
`;

const ButtonBox = styled.button`
  max-width: 573px;
  width: 100%;
  padding: 15px 0;
  background-color: #a558ff;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 24px;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #cba3fb;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
