import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
	// hook to manage form data
	// ability to initialize values of state (clearing the input fields on component loading)
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = formState;
	// handling error state
	const [errorMessage, setErrorMessage] = useState('');

	function handleChange(e) {
		// if input is email, then validate the value of the input field with validateEmail function and assign its return to isValid
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);
			// isValid conditional statement
			if (!isValid) {
				setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
		} else {
			// checking message/name form element values
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}

		// only allows the state to update with user input if there is no error message
		if (!errorMessage) {
			// target.name refers to name attribute of the form element i.e. name, email, message on line 24
			setFormState({ ...formState, [e.target.name]: e.target.value })
		}

		// console.log('errorMessage', errorMessage);
	}

	// console.log(formState);

	// preventing default action of form Submit button and then log formState object on Submit button click
	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}


	return (
		<section>
			<h1>Contact me</h1>
			<form id='contact-form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					{/* default value initializes the state, onBlur eventlistener syncs the state or updates current data while data is typed */}
					<input type='text' defaultValue={name} onBlur={handleChange} name='name' />
				</div>
				<div>
					<label htmlFor='email'>Email address:</label>
					<input type='email' defaultValue={email} onBlur={handleChange} name='email' />
				</div>
				<div>
					<label htmlFor='message'>Message:</label>
					<textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
				</div>
				{/* only want this error message to appear if errorMessage contains error message */}
				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
				<button type='submit'>Submit</button>
			</form>
		</section>
	)
}

export default ContactForm;