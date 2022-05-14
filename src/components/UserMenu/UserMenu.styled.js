import styled from '@emotion/styled';

export const Wrap = styled.div``;
export const Greeting = styled.span`
	font-size: 20px;
	font-weight: 500;

	color: #90caf9;
	margin-right: 20px;
`;

export const BtnLogOut = styled.button`
	display: inline-flex;
	margin: 10px;

	justify-content: center;
	align-items: base;

	width: 90px;
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
