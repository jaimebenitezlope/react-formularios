import styled from 'styled-components';

const StyledInput = styled.input`
	border-radius: 7px;
	border: 0.1px solid grey;
	width: 279px;
	height: 56px;
	color: #3d3b48;
	font-family: 'Poppins', sans-serif;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
`;

const StyledInputSend = styled.input`
	border-radius: 7px;
	border: 0.1px solid grey;
	width: 279px;
	height: 56px;
	color: #3d3b48;
	font-family: 'Poppins', sans-serif;
	background-color: #38cc8b;
	color: #ffffff;
	font-family: 'Poppins', sans-serif;
	box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.7);
`;

export { StyledInput, StyledDiv, StyledInputSend };
