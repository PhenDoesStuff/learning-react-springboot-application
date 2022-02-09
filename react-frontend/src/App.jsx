import './App.css';
import { EmployeeList } from './components/EmployeeList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<div>
			<Header />
			<EmployeeList />
			<Footer />
		</div>
	);
}

export default App;
