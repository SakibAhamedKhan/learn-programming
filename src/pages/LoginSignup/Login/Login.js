import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useSignInWithEmailAndPassword(auth);
	const [emailForReset, setEmailForReset] = useState('');
	const navigate = useNavigate();

	const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
		auth
	  );
	
	let errorElement ;
 	if(loading){
		return <Loading></Loading>;
	} 
	if(error || resetError){
		errorElement = <div>
			 <p className='text-danger mt-2'>Error: {error?.message}{resetError?.message}</p>
		 </div>
	}
	if(user){
		navigate('/home');
	}

	const handleEmail = (event) => {
		setEmailForReset(event.target.value);
	}
	
	const handleResetPassword = () => {
		errorElement = '';
		if(emailForReset.length === 0){
			alert('At first Fill the Email Field')
		} else{
			toast("Password reset mail sended");
			sendPasswordResetEmail(emailForReset);
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		errorElement = '';
		const email = event.target.email.value;
		const password = event.target.password.value;
		console.log(email, password);
		signInWithEmailAndPassword(email, password);
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
						<Form.Control onBlur={handleEmail} type="email" placeholder="name@example.com" name='email' required/>
					</FloatingLabel>
					<FloatingLabel controlId="floatingPassword" label="Password">
						<Form.Control type="password" placeholder="Password" required name='password' />
					</FloatingLabel>
					{
						errorElement
					}
					<p className='my-3'>Forgotten password? <span onClick={handleResetPassword} style={{cursor:'pointer'}} className='text-primary'>reset now</span></p>
					<button className='btn btn-warning nav-btn login-btn py-3'>Login</button>
				</form>
				<p className='my-3 text-center'>New in Learn Programming? <Link to='/signup' style={{cursor:'pointer', textDecoration:'none'}} className='text-primary'>signup now</Link></p>
				
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;