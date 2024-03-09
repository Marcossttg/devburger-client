import styled from 'styled-components';
import BgImgDisplay from '../../assets/bg-image_display.svg';

export const Container = styled.div`
height: 100vh;
background: url("${BgImgDisplay}");
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
height: 100vh;
`;

export const Image = styled.img`
margin-top: 30px;
`;

export const InputLabel = styled.p`
margin-left: 25px;
color: #eeeeee;
font-size: 18px;
font-style: normal;
font-weight: bold;
letter-spacing: -0.408px;
line-height: 22px;
`;

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
outline: none;
padding-left: 25px;
color: #FFFFFF;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
margin-bottom: 25px;
`;

export const Button = styled.button`
width: 342px;
height: 74px;
background: rgba(0, 0, 0, 0.8);
color: #FFFFFF;
border-radius: 14px;
border: none;
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
