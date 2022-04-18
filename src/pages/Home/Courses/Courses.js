import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
	const [course, setCourse] = useState([]);
	
	
	useEffect(() =>{
		
		fetch('/courses-data.json')
		.then(res => res.json())
		.then(data => setCourse(data));
	},[]);

	return (
		<div className='container my-5' id='courses'>
			<h2 className='fs-5 text-center' >My Course</h2>
			<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold mx-auto'></div>
			<h1 className='my-3 text-center'>Featured Courses</h1>
			{
				(course.length===0)?
				<Loading></Loading>
				:
				<div className='courses-all '>
					{
						course.map(data => <Course
							key={data.id}
							data={data}
						></Course>)
					}
				</div>
			}
			
		</div>
	);
};

export default Courses;