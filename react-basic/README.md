# Basic React Notes

Dalam repositori ini, kita akan belajar beberapa fungsi dasar dari React JS. Untuk melihat setiap catatan perubahan di masing-masing file example, anda dapat melihat history commit di masing-masing file. Ini dapat memudahkan untuk mengetahui perubahan dan pembahasan dari basic React JS.

## Membuat Komponen

Pertama yang perlu dilakukan adalah dengan membuat sebuah file berekstensi .js. Biasanya komponen memiliki nama dengan huruf kapital sehingga memudahkan saat dipanggil ke induknya seperti App.js. Contohnya dapat dilihat di `components/ExpenseItem.js`.

Pada dasarnya, komponen terbuat dari sebuah fungsi, yang berisi return value berupa JSX, lalu kita lakukan export default.

Keuntungan menggunakan komponen adalah reusability, yaitu dapat digunakan berulang kali.

Selain itu, kita dapat melemparkan data yang biasa disebut `props`, dari induk atau parent element ke tiap komponen. Misal dari App -> item="Hello" -> component `<List Data text={item}>` -> `<li>{props.item}</li>`. Dapat dilihat di `App.js` dan `components/ExpenseItems.js`.

Tentu saja, kita dapat memecah kembali komponen ke sebuah sub-komponen, seperti pada contoh Expense Item, kita akan memecahkan 1 komponen lagi yaitu Expense Date. Yaitu komponen untuk menampilkan tanggal.

Konsep lain yang digunakan biasa disebut sebagai Composition, dimana kita dapat memecah komponen yang kurang lebih memiliki fungsi, style yang sama, seperti contohnya `Card.js`.
Pada file ini kita membuat sebuah wrapper bernama Card, yang memiliki fungsi untuk menyamakan basic style, dan juga bisa menerima `children props`. Sehingga kita perlu mengubah div wrapper (div paling atas) menggunakan `<Card>` pada file lain seperti ExpenseItem dan Expense.
