import { SpinnerRoundFilled } from 'spinners-react';

import styled from '@emotion/styled';

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: #0d1117;
	height: 100vh;
	align-items: center;
`;

export const LoadingSpinner = styled(SpinnerRoundFilled)`
	margin-top: 50vh;
`;
