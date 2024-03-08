import styled from 'styled-components';
import BgImgDisplay01 from '../../assets/bg-image_display-01.svg';



export const Container = styled.div`
height: 100vh;
background: url("${BgImgDisplay01}");
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
`;

export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItens = styled.div`
background: linear-gradient(
157.44deg, 
rgba(255, 255, 255, 0.6)0.84%, 
rgba(255, 255, 255,0.6) 0.85%,
rgba(255, 255, 255, 0.15)100%);
backdrop-filter: blur(45px);
border-radius: 61px 61px 0px 0px;
padding: 50px 30px;
display: flex;
flex-direction: column;
height: 100%;
`;

export const H1 = styled.h1`
text-align: center;
color: #FFFF;
font-size: 34px;
font-weight: bold;
line-height: 40px;
margin-bottom: 50px;
`;

export const Button = styled.button`
width: 342px;
height: 74px;
background: transparent;
color: #FFFFFF;
border-radius: 14px;
border: 1px solid #FFFFFF;
font-size: 17px;
font-style: normal;
font-weight:bold;
line-height: 28px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 130px;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
outline: none;
margin-top: 25px;

p {
color: #FFFFFF;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
}

button {
    background: none;
    border: none;
    cursor: pointer;
}
`;

