# Basic React Notes

Dalam repositori ini, kita akan belajar beberapa fungsi dasar dari React JS.

## Membuat Komponen

Pertama yang perlu dilakukan adalah dengan membuat sebuah file berekstensi .js. Biasanya komponen memiliki nama dengan huruf kapital sehingga memudahkan saat dipanggil ke induknya seperti App.js. Contohnya dapat dilihat di `components/ExpenseItem.js`.

Pada dasarnya, komponen terbuat dari sebuah fungsi, yang berisi return value berupa JSX, lalu kita lakukan export default.

Keuntungan menggunakan komponen adalah reusability, yaitu dapat digunakan berulang kali.

Selain itu, kita dapat melemparkan data yang biasa disebut `props`, dari induk atau parent element ke tiap komponen. Misal dari App -> item="Hello" -> component `<List Data text={item}>` -> `<li>{props.item}</li>`. Dapat dilihat di `App.js` dan `components/ExpenseItems.js`.
