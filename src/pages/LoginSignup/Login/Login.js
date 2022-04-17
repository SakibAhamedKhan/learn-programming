import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {


	const handleSubmit = () => {

	}
	return (
		<div className='container login d-flex justify-content-center align-items-start'>
			<div className='login-container'>
				<h3 className='text-center mb-4'>Login</h3>
				<form onSubmit={handleSubmit}>
					<FloatingLabel
						controlId="floatingInput"
						label="Email address"
						className="mb-3"
					>
						<Form.Control type="email" placeholder="name@example.com" required/>
					</FloatingLabel>
					<FloatingLabel controlId="floatingPassword" label="Password">
						<Form.Control type="password" placeholder="Password" required />
					</FloatingLabel>
					<p className='my-3'>Forgotten password? <span style={{cursor:'pointer'}} className='text-primary'>reset now</span></p>
					<button className='btn btn-warning nav-btn login-btn py-3'>Login</button>
				</form>
				<p className='my-3 text-center'>New in Learn Programming? <Link to='/signup' style={{cursor:'pointer', textDecoration:'none'}} className='text-primary'>signup now</Link></p>
				
			</div>
		</div>
	);
};

export default Login;