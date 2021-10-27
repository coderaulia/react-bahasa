import React from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = () => {
	return (
		<div className='new-expense'>
			<ExpenseForm />
		</div>
	);
};

export default AddExpense;
