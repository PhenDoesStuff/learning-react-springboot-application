import React from 'react';

// TODO - Implement form using props
const EmployeeForm = () => {
	return (
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
							<button
								className='btn btn-success'
								onClick={e => saveEmployee(e)}>
								Submit Employee
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployeeForm;
