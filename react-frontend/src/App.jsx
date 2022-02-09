import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { EmployeeList } from './components/EmployeeList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<div>
			<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route exact path='/' element={<EmployeeList/>}></Route>
					<Route path='/employees' element={<EmployeeList/>}></Route>
				</Routes>
			</div>
			<Footer />
			</Router>
		</div>
	);
}

export default App;
