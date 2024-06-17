import { useState } from 'react';
import { StyledDiv, StyledInput, StyledInputSend } from './form.styles';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		age: '',

		errors: {
			name: false,
			age: false
		}
	});

	return (
		<form>
			<StyledDiv>
				<StyledInput
					placeholder='First Name'
					type='text'
					name='name'
					id='name'
					onInput={event =>
						changeFormValues(event.target, formData, setFormData)
					}
				/>
				{!formData.errors.name && <span>Invalid Name</span>}
			</StyledDiv>
			<StyledDiv>
				<StyledInput
					placeholder='Last Name'
					type='text'
					name='age'
					id='age'
					onInput={event =>
						changeFormValues(event.target, formData, setFormData)
					}
				/>
				{!formData.errors.age && <span>Invalid Age</span>}
			</StyledDiv>
			<StyledDiv>
				<StyledInput
					placeholder='Email Adress'
					type='text'
					name='age'
					id='age'
					onInput={event =>
						changeFormValues(event.target, formData, setFormData)
					}
				/>
				{!formData.errors.age && <span>Invalid Age</span>}
			</StyledDiv>
			<StyledInputSend type='submit' value='CLAIM YOUR FREE TRIAL' />
		</form>
	);
};

const validateForm = (name, value, formData, setFormData) => {
	const formatedValue = value.trim();
	const regexName = /^[a-zñ]+$/i;
	if (name === 'name') {
		const isValidName = regexName.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, name: isValidName }
		});
	} else if (name === 'age') {
		const isValidAge = value > 16 && value < 110;
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, age: isValidAge }
		});
	}
};

const changeFormValues = (input, formData, setFormData) => {
	const { name, value } = input;
	validateForm(name, value, formData, setFormData);
};
export default Form;
