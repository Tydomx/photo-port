import React, { useState } from 'react';

function ContactForm() {
	// hook to manage form data
	// ability to initialize values of state (clearing the input fields on component loading)
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = formState;

	function handleChange(e) {
		// target.name refers to name attribute of the form element i.e. name, email, message on line 24
		setFormState({ ...formState, [e.target.name]: e.target.value })
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
					{/* default value initializes the state, onChange eventlistener syncs the state or updates current data while data is typed */}
					<input type='text' defaultValue={name} onChange={handleChange} name='name' />
				</div>
				<div>
					<label htmlFor='email'>Email address:</label>
					<input type='email' defaultValue={email} onChange={handleChange} name='email' />
				</div>
				<div>
					<label htmlFor='message'>Message:</label>
					<textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
				</div>
				<button type='submit'>Submit</button>
			</form>
		</section>
	)
}

export default ContactForm;