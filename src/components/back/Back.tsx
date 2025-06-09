import styled from "styled-components"

interface BackProps{
  span: string;
}

const Back = ({span}: BackProps) =>{
  return(
    <Container>
      <BackImg src="/src/assets/arrow.png" alt="" />
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
`
const BackImg = styled.img`
  
`

const Span = styled.span`
  font-size: 22px;
  font-weight: 400;
  color: #BCBCBC;
`

export default Back;