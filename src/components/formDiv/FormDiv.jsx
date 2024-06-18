import { Form } from 'react-router-dom';
import Button from '../button/Button';
import { StyledFormDiv } from './form.styled';

const FormDiv = ({ children }) => {
	return (
		<StyledFormDiv>
			<Button />
			<Form />
		</StyledFormDiv>
	);
};

export default FormDiv;
