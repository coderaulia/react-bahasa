import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Komponen Square ini akan me-render semua return value didalamnya, yaitu sebuah button dengan class square. (react menggunakan className utk deklarasi class), dan juga mendapatkan props yg dilemparkan dari Board
// Menambahkan onCLick function ketika button diclick oleh user
class Square extends React.Component {
	constructor(props) {
		// memanggil super ketika mendefinisikan konstruktor dari sebuah subkelas. Semua kelas komponen React yang memiliki constructor harus dimulai dengan super(props).
		super(props);
		this.state = {
			value: null,
		};
	}

	render() {
		return (
			// mengubah method render Square untuk menampilkan nilai state saat ini ketika diklik, yaitu mengubah value menjadi "X"
			<button className="square" onClick={() => this.setState({ value: "X" })}>
				{this.state.value}
			</button>
		);
	}
}

//Komponen ini akan me-render Square berjumlah 9
class Board extends React.Component {
	renderSquare(i) {
		return <Square value={i} />;
	}

	render() {
		const status = "Next player: X";

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
