import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  height: 72px;
  background: #fff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#9758A6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  .line {
    height: 40px;
    border-right: 0.5px solid #bababa;
  }
`

export const ContainerText = styled.div`
  p {
    color: #555;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
  }

  .exit {
    color: #9758a6;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
