import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
	const [filter, setFilter] = useState("2021");

	const filterChangeHandler = (year) => {
		setFilter(year);
	};
	return (
		<>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filter}
					onChangeFilter={filterChangeHandler}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
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
