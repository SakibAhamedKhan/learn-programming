import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
	const handleSubmit = () => {

	}
	return (
		<div className='container login d-flex justify-content-center align-items-start'>
			<div className='login-container'>
				<h3 className='text-center mb-4'>Signup</h3>
				<form onSubmit={handleSubmit}>
					<FloatingLabel
						controlId="floatingInput"
						label="Name"
						className="mb-3"
					>
						<Form.Control type="text" placeholder="Your Name" name='name' required/>
					</FloatingLabel>
					<FloatingLabel
						controlId="floatingInput"
						label="Email address"
						className="mb-3"
					>
						<Form.Control type="email" placeholder="name@example.com" name='email' required/>
					</FloatingLabel>
					<FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
						<Form.Control type="password" placeholder="Password" name='password' required />
					</FloatingLabel>
					<FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3">
						<Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' required />
					</FloatingLabel>
					{/* <p className='my-3'>Forgotten password? <span style={{cursor:'pointer'}} className='text-primary'>reset now</span></p> */}
					<button className='btn btn-warning nav-btn login-btn py-3'>Signup</button>
				</form>
				<p className='my-3 text-center'>Already have account? <Link to='/login' style={{cursor:'pointer', textDecoration:'none'}} className='text-primary'>login now</Link></p>
				
			</div>
		</div>
	);
};

export default Signup;