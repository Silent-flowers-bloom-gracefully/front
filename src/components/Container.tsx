import styled from 'styled-components';

interface PropsType {
  children?: React.ReactNode;
  hasHeader?: boolean;
}

const Container = ({ children, hasHeader = true }: PropsType) => {
  return (
    <Background>
      <Main hasHeader={hasHeader}>{children}</Main>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface MainProps {
  hasHeader: boolean;
}

const Main = styled.main<MainProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 788px;
  height: 100%;
  background-color: #fcf8ff;
  border: 0px 1px 0px 1px solid #e3e3e3;
  padding-top: ${({ hasHeader }) => (hasHeader ? '120px' : '0')};
  box-sizing: border-box;
`;

export default Container;
