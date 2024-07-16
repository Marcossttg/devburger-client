import styled from "styled-components";
import { Button } from "../../../components"

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	form {
		background: #565656;
		border-radius: 5px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
`;

export const Label = styled.p`
	font-size: 16px;
	color: #FFFFFF;
	margin-bottom: 3px;
`;

export const Input = styled.input`
	width: 322px;
	height: 40px;
	border-radius: 8px;
	background: #FFF;
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.10);
	border: none;
	width: 100%;
	min-width: 280px;
	padding-left: 10px;
	/* margin-bottom: 25px; */
`;

export const ButtonStyles = styled(Button)`
	margin-top: 25px;
	width: 100%;
`;

export const LabelUpLoad = styled.label`
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 5px;
	border: 1px dashed #ffffff;
	padding: 10px;
	gap: 10px;
	/* margin-bottom: 25px; */

	input {
		opacity: 0;
		display: none;
		width: 1px;
	}
`;
