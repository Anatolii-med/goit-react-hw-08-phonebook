import styled from '@emotion/styled';

export const Elements = styled.li`
	margin: 0 auto 10px;
	padding: 10px;
	width: 280px;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	background-color: #161b22;
	box-shadow: 2px 2px 2px 3px rgba(91, 128, 160, 0.2);
`;
export const Buttons = styled.button`
	display: inline-flex;
	margin: 5px 0;

	justify-content: center;
	align-items: center;

	width: 20%;
	height: 20px;
	color: #90caf9;
	background-color: #0d1117;

	font-size: 12px;
	font-weight: 400;
	text-decoration: none;

	transition: 200ms linear;
	border: 2px solid #90caf9;

	&:hover {
		color: #5b80a0;
		border-radius: 5px;
	}
`;
export const Text = styled.span`
	margin: 0;
	width: 70%;
`;
