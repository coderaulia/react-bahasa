import logo from "./logo.svg";
import "./App.css";
import ExpenseItems from "./components/ExpenseItems";

function App() {
	return (
		<div className='App'>
			<h1>App Title</h1>
			<ExpenseItems></ExpenseItems>
		</div>
	);
}

export default App;
