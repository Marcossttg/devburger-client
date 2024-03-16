import styled from 'styled-components';

export const Container = styled.div`
background-color: #0A0A10;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
`;

export const P = styled.p`
margin-left: 25px;
font-size: 18px;
font-style: normal;
font-weight: bold;
letter-spacing: -0.408px;
line-height: 22px;;
color: #EEEEEE;
`;

export const OrderList = styled.li`
width: 342px;
height: 101px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
margin-bottom: 25px;
list-style: none;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;

div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    P {
        margin-left: 0;
    }
}

button {
    background: none;
    border: none;
    cursor: pointer;
}
`;

export const ParagraphOrder = styled.p`
color: #FFFFFF;
font-weight: lighter;
font-size: 18px;
line-height: 20px;
`;