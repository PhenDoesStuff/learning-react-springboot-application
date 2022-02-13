import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/v1';
const EMPLOYEES = '/employees';

class EmployeeService {
	getAllEmployees() {
		return axios.get(BASE_API_URL + EMPLOYEES);
	}

	createEmployee(employee) {
		return axios.post(BASE_API_URL + EMPLOYEES, employee);
	}

	getEmployeeById(employeeId) {
		return axios.get(
			BASE_API_URL + EMPLOYEES + '/' + employeeId
		);
	}

	updateEmployee(employeeId, employee) {
		return axios.put(
			BASE_API_URL + EMPLOYEES + '/' + employeeId,
			employee
		);
	}

	deleteEmployee(employeeId) {
		return axios.delete(
			BASE_API_URL + EMPLOYEES + '/' + employeeId
		);
	}
}

export default new EmployeeService();
