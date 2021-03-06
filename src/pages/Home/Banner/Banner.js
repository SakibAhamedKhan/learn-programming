import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Banner.css'

const Banner = () => {
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);


	const handleEnroll = () => {
		navigate('/#courses');
	}

	const handleSignupBtn = () => {
		navigate('/signup');
	}
	return (
		<div className='banner'>
			<div className='banner-title w-75'>
				<h1 className='text-center fw-bold'>Welcome to Learn Programming</h1>
				<p className='text-center text-light my-3'>A online plateform Where you can learn programming and grow your programming skill next level</p>
				{
					user ?
					<div className='d-flex justify-content-center align-item-center'>
					<a href='#courses' className='btn btn-warning nav-btn mt-3 py-3 px-5 fs-5'>Enroll Now</a>
					</div>
					:
					<div className='d-flex justify-content-center align-item-center'>
					<button onClick={handleSignupBtn} className='btn btn-warning nav-btn mt-3 py-3 px-5 fs-5'>Register Now</button>
					</div>
				}
			</div>
		</div>
	);
};

export default Banner;