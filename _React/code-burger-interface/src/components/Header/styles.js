import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
	height: 72px;
	background: #FFF;
	box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
`;

export const ContainerLeft = styled.div`
	display: flex;
	gap: 30px;

	.home {
		color: #9758A6;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`;

export const PageLink = styled.a`
	cursor: pointer;
	text-decoration: none;
	color: #555555;
	font-size: 16px;
	line-height: 19px;
`;

export const ContainerRight = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;

	.line {
		height: 40px;
		border-right: 0.5px solid #BABABA;;
	}
`;

export const ContainerText = styled.div`
	p {
		color: #555;
		font-size: 14px;
		font-weight: 300;
		line-height: 16px;
	}

	.exit {
		color: #9758A6;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`;
