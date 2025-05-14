import styled from 'styled-components';
import LogoUrl from '../assets/TextLogo2.png';
import { useState } from 'react';

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      <Wrapper>
        <LogoBox>
          <img src={LogoUrl} />
        </LogoBox>
        <TabList>
          {['진행도', 'to-do리스트', '커뮤니티', '마이'].map((label, index) => (
            <li
              key={label}
              className={selectedIndex === index ? 'selected' : ''}
              onClick={() => setSelectedIndex(index)}
            >
              {label}
              <div></div>
            </li>
          ))}
        </TabList>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const Wrapper = styled.div`
  width: 788px;
  height: 120px;
  display: flex;
  background-color: #56278f;
  flex-direction: column;
  gap: 40px;
  padding: 20px 20px 2px 20px;
  box-sizing: border-box;
`;

const LogoBox = styled.div``;

const TabList = styled.ul`
  display: flex;
  gap: 50px;
  position: relative;
  color: white;

  & > li {
    cursor: pointer;

    & > div {
      height: 1px;
      background-color: transparent;
      margin-top: 10px;
      transition: background-color 0.3s;
    }

    &.selected > div {
      background-color: white;
    }
  }
`;
