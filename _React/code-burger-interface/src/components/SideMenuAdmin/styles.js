import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	top: 0;
	left: 0;	
	width: 300vw;
	background: #3C3C3C;
	box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);

	hr {
		margin: 50px 15px;
	}
`;

export const ItemContainer = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	border-radius: 2px;
	background: #565656;
	margin: 8px;
	padding-left: 20px;

	.icon {
		color: #FFFFFF;
	}
`;

export const ListLinks = styled(Link)`
	text-decoration: none;
	color: #FFF;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin-left: 8px;
`;