import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/';
const EMPLOYEES = 'employees';

class EmployeeService {
	getAllEmployees() {
		return axios.get(BASE_API_URL + EMPLOYEES);
	}
}

export default new EmployeeService();
