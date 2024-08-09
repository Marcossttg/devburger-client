import styled from 'styled-components'

import Background from '../../assets/background-img.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerItens = styled.div`
  height: 70%;
  background: #373737;
  border-radius: 0 10px 10px 0;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 75px;

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    text-align: left;
    text-align: center;
    margin-top: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  margin: 28px 0 5px;
`

export const Input = styled.input`
  width: 100%;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  background-color: #fff;
  height: 38.3px;
  border: ${(props) => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-size: 14px;
  color: #fff;

  a {
    text-decoration: underline;
    cursor: pointer;
    transition: ease-in-out;

    &:hover {
      color: #9758a6;
    }
  }
`
