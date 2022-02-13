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
}

export default new EmployeeService();
