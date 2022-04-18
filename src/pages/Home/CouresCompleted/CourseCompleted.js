import React from 'react';
import './CourseCompleted.css'

const CourseCompleted = () => {
	return (
		<div className='bg-light d-flex justify-content-center align-items-center'>
			<div className='container courseCompleted m-5'>
				<div className='d-flex justify-content-center align-items-center flex-column'>
					<h2 className='text-center'>1500+</h2>
					<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold my-2'></div>
					<p className='text-center'>Student Enrolled</p>
				</div>
				<div className='d-flex justify-content-center align-items-center flex-column middle-one'>
					<h2 className='text-center'>6+</h2>
					<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold my-2'></div>
					<p className='text-center'>Courses Uploaded</p>
				</div>
				<div className='d-flex justify-content-center align-items-center flex-column'>
					<h2 className='text-center'>1200+</h2>
					<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold my-2'></div>
					<p className='text-center'>People Certifie</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCompleted;