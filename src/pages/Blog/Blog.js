import React from 'react';
import { Table } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
	return (
		<div className='container blogs'>
			<h2 className='text-center mt-5'>Blogs</h2>
			<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold my-2 mx-auto mb-5'></div>
			<div className='blogs-question'>
				<h6>Q:1. Difference between `authorization` and `authentication`’?</h6>
				<p>Ans:</p>
					<Table className='my-3' striped bordered hover>
						<thead>
							<tr>
							<th>#</th>
							<th>Authorization</th>
							<th>Authentication</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>1</td>
							<td>Authorization is a process to give permission to an identified user which resource the user can access.</td>
							<td>Authentication is a process to identify a user and after authenticating user can access the system.</td>
							</tr>
							<tr>
							<td>2</td>
							<td>Authorization permission can not change by the user, only the system owner can change it.</td>
							<td>Authentication permission can change by an identified user.</td>
							</tr>
							<tr>
							<td>3</td>
							<td>An authorization example is, A free user in a premium Software only accesses some basic features, but A premium user has got access by buying this.</td>
							<td>An authentication example is, that A user can log in and signup for her account, and also user can change his password and some other setting related to login.</td>
							</tr>
						</tbody>
					</Table>
					<h6 className='mt-5'>Q:2. Why are you using `firebase`? What other options do you have to implement authentication?</h6>
					<p>Ans: Firebase gives you Backend support to build a dynamic Application. Firebase has some features, With the help of firebase you can Authenticate users, Store data in Storage and real-time Database, Host your site, and Give you some analysis that can help the system owners. Firebase gives your system very powerful security.
					</p>
					<p>
					The Other option for implementing authentication is Auth0, Okta, Passport, Amazon Congnito, Keycloak.
					</p>
					<h6 className='mt-5'>Q:3. What other services does `firebase` provide other than authentication?</h6>
					<p>Ans: Firebase provides Firestore Database, Realtime Database, Storage, Hosting, Functions, Machine Learning.</p>
			</div>
		</div>
	);
};

export default Blog;