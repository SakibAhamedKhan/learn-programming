import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<div className='footer p-5'>
			<p style={{color:'white'}} className='text-center m-0'>© {new Date().getFullYear()} Learn Programming. All rights reserved.</p>
		</div>
	);
};

export default Footer;