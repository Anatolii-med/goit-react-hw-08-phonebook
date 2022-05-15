import styled from '@emotion/styled';

// export const Wrap = styled.div`
// 	display: flex;
// 	justify-content: center;

// 	padding: 30px;
// 	margin: 20px;

// 	width: 80%;
// 	color: #90caf9;
// 	list-style-type: none;

// 	border: 1px solid red;

// 	box-shadow: 4px 4px 8px 8px rgba(34, 60, 80, 0.2);
// `;

export const Wrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 90%;
	border-radius: 10px;
`;

export const List = styled.ul`
	margin-left: 10px;
	padding: 10px;
	width: 300px;
	color: #90caf9;
	list-style-type: none;

	box-shadow: 4px 4px 8px 8px rgba(34, 60, 80, 0.2);
`;

export const Text = styled.span`
	color: #90caf9;
	display: inline-flex;
	align-items: center;
	font-size: 30px;
	font-weight: 500;
`;
