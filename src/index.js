import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Komponen Square ini akan me-render semua return value didalamnya, yaitu sebuah button dengan class square. (react menggunakan className utk deklarasi class), dan juga mendapatkan props yg dilemparkan dari Board
// Menambahkan onCLick function ketika button diclick oleh user
class Square extends React.Component {
	// constructor(props) {
	// 	// memanggil super ketika mendefinisikan konstruktor dari sebuah subkelas. Semua kelas komponen React yang memiliki constructor harus dimulai dengan super(props).
	// 	super(props);
	// 	this.state = {
	// 		value: null,
	// 	};
	// }
	// Karena Square sudah tidak menyimpan state dari permainan

	render() {
		return (
			// Dengan memanggil this.setState dari handler onClick pada method render Square, kita memberi tahu React untuk me-render ulang Square setiap <button> diklik. Setelah diperbarui, this.state.value dari Square akan menjadi 'X', jadi kita akan melihat X pada papan permainan. Jika Anda mengklik salah satu Square, maka akan muncul X.
			<button className="square" onClick={() => this.props.onClick()}>
				{this.props.value}
			</button>
		);
	}
}

//Komponen ini akan me-render Square berjumlah 9
class Board extends React.Component {
	// menambahkan konstruktor ke Board dan menginisialisasi state dari Board berisi array dengan 9 null. Sembilan nilai ini melambangkan 9 persegi
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			// xIsNext (sebuah boolean) akan diubah nilainya untuk menentukan siapa yang akan membuat langkah selanjutnya dan state dari permainan akan disimpan
			xIsNext: true,
		};
	}

	//Ketika kita mencoba untuk mengklik salah satu Square, kita seharusnya akan mendapatkan sebuah pesan error karena kita belum mendefinisikan handleClick. Sekarang kita akan menambahkan handleClick pada kelas Board:
	handleClick(i) {
		const squares = this.state.squares.slice();
		// “X” dan “O” akan mendapatkan giliran setiap satu langkah selesai.
		squares[i] = this.state.xIsNext ? "X" : "O";
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext,
		});
	}

	renderSquare(i) {
		//menggunakan mekanisme pengoperan prop lagi. Kita akan memodifikasi Board untuk memberi instruksi pada setiap Square untuk mengubah nilai saat ini ('X', 'O', atau null).
		//Setiap Square akan menerima prop value yang dapat berupa 'X', 'O', atau null untuk persegi kosong.
		return (
			<Square
				value={this.state.squares[i]}
				//mengubah perilaku Square saat diklik, karena state dianggap private dalam suatu komponen, kita akan memberikan sebuah fungsi dari Board ke Square
				onClick={() => this.handleClick(i)}
			/>
		);
	}

	render() {
		// teks menampilkan pemain mana yang sedang mendapat giliran selanjutnya
		const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

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
