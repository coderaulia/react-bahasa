import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
	const [filter, setFilter] = useState("2021");

	const filterChangeHandler = (year) => {
		setFilter(year);
	};

	// Mengaktifkan filter tahun dari ExpenseFilter.js
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filter;
	});
	return (
		<>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filter}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				{/* Conditional jika data tidak tersedia */}
				{filteredExpenses.length === 0 && (
					<h2 className='expenses-list__fallback'>Tidak ada data.</h2>
				)}
				{filteredExpenses.length > 0 &&
					filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))}
			</Card>
		</>
	);
}

export default Expenses;
