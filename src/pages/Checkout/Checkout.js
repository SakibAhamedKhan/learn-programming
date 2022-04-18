import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
	const {courseId} = useParams();
	const [data, setData] = useState([]);
	const [final, setFinal] = useState({});
	const navigate = useNavigate();

	useEffect( ()=>{
		fetch('/courses-data.json')
		.then(res => res.json())
		.then(data => setData(data));
	} ,[]);
	
	useEffect( ()=>{
		const findedData = data.find(d => d.id === parseInt(courseId));
		setFinal(findedData);
	}, [data]);
	
	const handleSubmitCheckout = (event) =>{
		event.preventDefault();
		// return <div className='vh-100 d-flex justify-content-center align-items-center'>
		// 	<h2>Thanks for Enroll the Couse ({final?.name})</h2>
		// </div>;
		navigate('/thanks');
	}
	return (
		<div className='container'>
			{
				final ?
				<div className='checkout'>
					<div>
						<h4 className=''>Course: {final?.name}</h4>
						<p className='my-3'>Price: ${final?.price}</p>
						<form onSubmit={handleSubmitCheckout}>
							<FloatingLabel
								controlId="floatingInput"
								label="Name"
								className="mb-3"
							>
								<Form.Control type="text" placeholder="name" name='name' required/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingInput"
								label="Email address"
								className="mb-3"
							>
								<Form.Control type="email" placeholder="name@example.com" name='email' required/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingInput"
								label="Address"
								className="mb-3"
							>
								<Form.Control type="text" placeholder="address" name='address' required/>
							</FloatingLabel>
							<FloatingLabel controlId="floatingInput" label="Phone Number">
								<Form.Control type="text" placeholder="phone number" required name='phone' />
							</FloatingLabel>
							<button className='btn btn-warning nav-btn login-btn py-3 my-3'>Checkout Enroll</button>
						</form>
					</div>
					<div>

					</div>
				</div>
				:
				<Loading></Loading>

			}
			<ToastContainer />	
		</div>
	);
};

export default Checkout;		