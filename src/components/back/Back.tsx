import styled from "styled-components"
import { useNavigate } from "react-router-dom"

interface BackProps{
  span: string;
}


const Back = ({ span }: BackProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/main")
  }

  return (
    <Container onClick={handleClick}>
      <BackImg src="/src/assets/arrow.png" alt="뒤로가기" />
      <Span>{span}</Span>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  left: 13px;
  top: 21px;
  cursor: pointer;
`
const BackImg = styled.img`
  
`

const Span = styled.span`
  font-size: 22px;
  font-weight: 400;
  color: #BCBCBC;
`

export default Back;