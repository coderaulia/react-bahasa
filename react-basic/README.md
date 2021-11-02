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

## State & User Interaction

### Event Handler

React memudahkan kita untuk membuat event ketika sebuah element diklik, diubah, seperti button onclick dsb. Untuk membuatnya dengan cara menambahkan `onClick` pada sebuah element, seperti `<button onClick={eventName}></button>`.

Selanjutnya buat sebuah fungsi untuk memberikan handling pada event onclick tadi. Contohnya `const eventName = () =>{//event code}`. Jika menggunakan imperative javascript, kita perlu melakukan getElementById lalu gunakan addEventListener dsb. Dengan React membuatnya lebih cepat dan simple.

### Mengenal State (useState Hooks)

Ketika user melakukan klik pada sebuah button yang memiliki onClick, maka kode tereksekusi sesuai apa yang kita perintahkan. Akan tetapi secara default tidak akan ter-render ulang di komponen yang bersangkutan karena React tidak mengenali perintah reload/render ulang dari event tersebut. Inilah fungsi dari State dalam mengatur perubahan data, event dsb di JSX.

Untuk menggunakannya kita perlu meng-import useState. `import React, {useState} from 'react';`. Selanjutnya kita perlu memanggil `useState();` di dalam function komponen.

Biasanya kita perlu mendefinisikan default value, seperti `const [title, setTitle] = useState(props.title)`. Title adalah current state value, dan `setTitle` adalah fungsi yang nantinya akan kita panggil untuk mengupdate state Title.

Selanjutnya kita dapat mengupdate title pada event onClick tadi dengan menggunakan `setTitle('value yang diinginkan')`. Maka akan mengupdate perubahan dan me-render ulang JSX pada komponen tersebut.

Sebagai contoh kita akan membuat sebuah komponen form untuk menambahkan Expense Item. Lalu akan melakukan listen event `onChange` pada tiap form input. Dapat dilihat di file `components/AddExpense/Addexpense.js` dan `ExpenseForm.js`.

Untuk mengatur onSubmit event pada form, kita dapat membuat sebuah fungsi yang dapat mengatur onSubmit, mencegah refresh dengan preventDefault function, dan mengambil data inputan dari form. Dapat dilihat di `ExpenseForm.js`.

Selanjutnya, kita dapat mengatur two way binding data. Yaitu ketika sebuah form disubmit, maka akan mengosongkan form menjadi semula tanpa refresh. Dapat dilakukan dengan mengatur value di masing-masing input menjadi state semula (misal: enteredTitle). Lalu pada fungsi onSubmit, ubah state yang bersangkutan menjadi `setEnteredTitle('');` di bagian paling bawah fungsi.
