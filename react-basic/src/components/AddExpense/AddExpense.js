import React, { useState } from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
	const [editing, setEditing] = useState(false);

	const saveExpenseHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);

		// Set editing to false
		setEditing(false);
	};

	// Start editing
	const startEditingHandler = () => {
		setEditing(true);
	};

	// Stop Editing
	const stopEditingHandler = () => {
		setEditing(false);
	};

	return (
		<div className='new-expense'>
			{!editing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{editing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default AddExpense;
