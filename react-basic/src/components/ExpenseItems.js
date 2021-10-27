import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
	// spliting props to each variable data
	const month = props.date.toLocaleString("id-ID", { month: "long" });
	const day = props.date.toLocaleString("id-ID", { day: "2-digit" });
	const year = props.date.getFullYear();

	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</div>
	);
}
export default ExpenseItems;
