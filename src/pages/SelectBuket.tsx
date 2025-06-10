import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/button/Button";
import { useAuth } from "../context/AuthContext";

const BASE_URL = "https://silent-flowers.xquare.app";

const categories = [
  "여행", "문화", "건강", "자연", "음식", "취미", "학업", "취업", "연애", "기타"
];

export default function SelectBuket() {
  const navigate = useNavigate();
  const { signupData } = useAuth();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      }
      if (prev.length < 5) {
        return [...prev, category];
      }
      return prev;
    });
  };

  const handleSubmit = async () => {
    if (selectedCategories.length > 0) {
      try {
        const response = await axios.post(`${BASE_URL}/auth/signup`, {
          username: signupData.username,
          password: signupData.password,
          nickname: signupData.nickname,
          categories: selectedCategories.map(category => category.slice(0, 10))
        });

        if (response.status === 201) {
          navigate("/main");
        }
      } catch (error: any) {
        if (error.response?.status === 409) {
          setError("이미 존재하는 아이디입니다.");
        } else {
          setError("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
        console.error("API 호출 실패:", error);
      }
    }
  };

  return (
    <Container>
      <MainBox>
        <Title>관심 카테고리를 선택해주세요</Title>
        <SubTitle>최대 5개까지 선택 가능합니다</SubTitle>
        <CategoryContainer>
          {categories.map(category => (
            <CategoryButton
              key={category}
              selected={selectedCategories.includes(category)}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button 
          text="완료" 
          onClick={handleSubmit}
          disabled={selectedCategories.length === 0}
        />
      </MainBox>
    </Container>
  );
}

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
  justify-content: center;
  align-items: center;
  width: 788px;
  height: 100%;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: #666;
  margin-top: -20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 600px;
`;

const CategoryButton = styled.button<{ selected: boolean }>`
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

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: -10px;
`; 