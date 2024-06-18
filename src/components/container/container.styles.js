import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: auto;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	width: 375px;
	height: 1004px;
	background-color: #ff7979;
	background-image: url('/public/images/bg-intro-mobile.png');

	@media (min-width: 850px) {
		display: flex;
		flex-direction: row;
		width: 1440px;
		height: 1080px;
		}
`;
export { StyledDiv };
