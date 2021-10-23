import "./ExpenseItems.css";

function ExpenseItems() {
	return (
		<div className='expense-item'>
			<div>Date</div>
			<div className='expense-item__description'>
				<h2>Xiaomi phone</h2>
				<div className='expense-item__price'>$200</div>
			</div>
		</div>
	);
}

export default ExpenseItems;
