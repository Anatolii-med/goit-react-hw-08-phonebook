import styled from '@emotion/styled';

export const FormWrap = styled.form`
	margin: 10px;
	padding: 20px;
	width: 300px;
	display: inline-flex;
	flex-direction: column;
	background-color: #161b22;
	box-shadow: 4px 4px 8px 8px rgba(91, 128, 160, 0.2);
`;
export const Labels = styled.label`
	margin-bottom: 10px;
	justify-content: space-between;
	width: 100%;
	display: flex;
	color: #90caf9;
`;

export const InputArea = styled.input`
	background-color: #0d1117;
	color: #90caf9;
	border: 1px solid #5b80a0;
	&:hover {
		color: #5b80a0;
		border-radius: 5px;
	}
`;

export const BtnAddContact = styled.button`
	display: inline-flex;
	margin: 10px 0;

	justify-content: center;
	align-items: base;

	width: 100%;
	height: 30px;
	color: #90caf9;
	background-color: #0d1117;

	font-size: 20px;
	font-weight: 700;
	text-decoration: none;

	transition: 200ms linear;
	border: 2px solid #90caf9;

	&:hover {
		color: #5b80a0;
		transform: scale(0.95);
		border-radius: 25px;
	}
`;
