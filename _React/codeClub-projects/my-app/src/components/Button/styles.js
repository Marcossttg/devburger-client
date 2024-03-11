import styled from 'styled-components';

export const Button = styled.button`
width: 342px;
height: 74px;
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
color: #FFFFFF;
border-radius: 14px;
border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
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