import React from 'react';
import './Banner.css'
import banner from '../../../image/Banner/banner1.jpg';

const Banner = () => {
	return (
		<div className='banner'>
			<img className='w-100'  src={banner} alt="" srcset="" />
			<div className='banner-title'>
				<h2>Welcome to Learn Programming</h2>
				<p>A online plateform Where you can learn programming and grow your programming skill next level</p>
			</div>
		</div>
	);
};

export default Banner;