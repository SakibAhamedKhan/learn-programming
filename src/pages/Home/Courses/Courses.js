import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
	const [course, setCourse] = useState([]);
	
	
	useEffect(() =>{
		
		fetch('/courses-data.json')
		.then(res => res.json())
		.then(data => setCourse(data));
	},[]);
	// console.log(course);
	return (
		<div className='container my-5'>
			<h2 className='fs-5 '>My Course</h2>
			<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold'></div>
			<h1 className='my-3'>Featured Courses</h1>
			<div className='courses-all '>
				{
					course.map(data => <Course
						key={data.id}
						data={data}
					></Course>)
				}
			</div>
		</div>
	);
};

export default Courses;