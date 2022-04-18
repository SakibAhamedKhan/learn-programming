import React from 'react';
import './About.css'
import profile from '../../image/profile/Sakib_Profile1.jpg';

const About = () => {
	return (
		<div className='container about'>
			<h2 className='text-center mt-5'>About</h2>
			<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold my-2 mx-auto mb-5'></div>
			<div className='blogs-question about-info'>
				<div className='about-text'>
					<h5 style={{textAlign:'justify'}}>My name is Sakib Ahamed Khan. Now I study in BGC Trust University in CSE. My dream is to become a Software Engineer. For fullfill my dream I enrolled Programming Hero Web Development Course, Which give a road map how to learn something efficiently with Hardwork. My dream is so big but At this present my goal to compelete this with learn everything in Web Developement and become a Junior Web Developer then step by step fullfill my dream.</h5>
				</div>
				<div className='d-flex justify-content-end about-img'>
					<img height={180} src={profile} alt="" />
				</div>
			</div>
		</div>
	);
};

export default About;