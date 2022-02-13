import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const navigate = useNavigate();

	const saveEmployee = e => {
		e.preventDefault();

		const employee = { firstName, lastName, emailAddress };

		EmployeeService.createEmployee(employee)
			.then(response => {
				console.log(response.data);
				navigate('/employees');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<br /> <br />
			<div className='container'>
				<div className='row'>
					<div className='card col-md-6 offset-md-3 offset-md-3'>
						<h2 className='text-center'>Add Employee</h2>
						<div className='card-body'>
							<form action=''>
								<div className='form-group mb-2'>
									<label className='form-label'>
										First Name:
									</label>
									<input
										type='text'
										placeholder='Enter First Name'
										name='firstName'
										className='form-control'
										value={firstName}
										onChange={e =>
											setFirstName(e.target.value)
										}
									/>
								</div>
								<div className='form-group mb-2'>
									<label className='form-label'>
										Last Name:
									</label>
									<input
										type='text'
										placeholder='Enter Last Name'
										name='lastName'
										className='form-control'
										value={lastName}
										onChange={e =>
											setLastName(e.target.value)
										}
									/>
								</div>
								<div className='form-group mb-2'>
									<label className='form-label'>
										Email Address:
									</label>
									<input
										type='text'
										placeholder='Enter Email Address'
										name='emailAddress'
										className='form-control'
										value={emailAddress}
										onChange={e =>
											setEmailAddress(e.target.value)
										}
									/>
								</div>
								<button
									className='btn btn-success'
									onClick={e => saveEmployee(e)}>
									Submit
								</button>
								<Link
									to='/employees'
									className='btn btn-danger'>
									Cancel
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddEmployee;
