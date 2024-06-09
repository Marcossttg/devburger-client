import styled from "styled-components";

export const ContainerButton = styled.button`
border-radius: 20px;
width: 182.81px;
height: 36.13px;
background-color: #9758A6;
cursor: pointer;
border: none;
transition: ease-in-out;

&:hover {
	opacity: 0.8;
	transform: scale(1.1);
}

&:active {
	opacity: 0.6;
}

font-size: 16px;
font-weight: 500;
color: #eee;
text-align: center;
`