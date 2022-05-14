import styled from '@emotion/styled';

export const FilterLabel = styled.li`
	margin: 0 10px 10px 10px;
	padding: 10px;
	width: 300px;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	list-style-type: none;
	background-color: #161b22;

	box-shadow: 2px 2px 2px 2px rgba(91, 128, 160, 0.2);
`;
export const FilterInput = styled.input`
	background-color: #0d1117;
	color: #90caf9;
	border: 1px solid #5b80a0;
	&:hover {
		color: #5b80a0;
		border-radius: 5px;
	}
`;
export const Text = styled.span`
	margin: 0;
	width: 70%;
	color: #90caf9;
`;
