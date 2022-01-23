import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';

export const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		EmployeeService.getAllEmployees()
			.then(response => {
				setEmployees(response.data);
				console.log(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className='container'>
			<h2 className='text-center'>List of Employees</h2>
			<table className='table table-bordered table-striped'>
				<thead>
					<th>Employee ID</th>
					<th>Employee First Name</th>
					<th>Employee Last Name</th>
					<th>Employee Email Address</th>
				</thead>
				<tbody>
					{employees.map(employee => (
						<tr key={employee.id}>
							<td>{employee.id}</td>
							<td>{employee.firstName}</td>
							<td>{employee.lastName}</td>
							<td>{employee.emailAddress}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};