import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BarLinks = styled(NavLink)`
	display: inline-flex;
	margin: 10px;

	justify-content: center;
	align-items: base;

	width: 90px;
	height: 30px;
	color: #90caf9;

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
	&.active {
		color: #f84159;
		transform: scale(0.95);
		border-radius: 20px;
	}
`;
