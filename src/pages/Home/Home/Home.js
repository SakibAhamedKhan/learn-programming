import React from 'react';
import Banner from '../Banner/Banner';
import CourseCompleted from '../CouresCompleted/CourseCompleted';
import Courses from '../Courses/Courses';
import './Home.css'

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Courses></Courses>
			<CourseCompleted></CourseCompleted>
		</div>
	);
};

export default Home;