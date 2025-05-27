import styled from 'styled-components';

interface PropsType {
  children?: React.ReactNode;
}

const Container = ({ children }: PropsType) => {
  return (
    <Background>
      <main>{children}</main>
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

  & > main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 788px;
    height: 100%;
    background-color: #fcf8ff;
    border: 0px 1px 0px 1px solid #e3e3e3;
    padding-top: 120px;
    box-sizing: border-box;
  }
`;

export default Container;
