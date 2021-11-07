# Advanced React

Pada repositori ini, kita akan mengulik lebih dalam beberapa fitur yang lebih advance dari React. Pertama kita perlu membuat sebuah project baru dengan create-react-app. `npx create-react-app advance-react`.

Untuk base project anda dapat mendownloadnya dari folder ini.

## Fragments

JSX mengharuskan kita untuk memiliki satu tag yang menjadi root atau induk dari beberapa tag. Misalnya ada dua tag `<div>` dan `<span>`, atau `<h2>` dengan `<p>`, secara otomatis akan terjadi error, maka kita harus memiliki satu tag yang menjadi root.

Tentunya kita dapat menggunakan tag `<div>` sebagai root untuk menampung tag-tag tadi. Akan tetapi, dalam projek yang lebih besar nantinya, kita akan memiliki banyak tag `<div>` yang tidak diperlukan.

Solusinya kita dapat menggunakan Fragments. Kita dapat mendefinisikan fragments dengan menggunakan tag `<>` dan `</>`.

Contohnya dapat dilihat di folder src/components/Users/AddUser.js

## React Portals

Dalam beberapa kasus seperti pada starting project di folder src, terkadang kita perlu melakukan proses yang tidak terstruktur. Misalnya, kita memiliki sebuah modal yang akan muncul di halaman yang lain.

Contohnya pada kasus file `src/components/Users/AddUser.js`. Jika kita ingin menggunakan modal, maka kita harus menggunakan React Portal. Karena secara default, modal dirender setelah tag `<div>` yang menjadi root. Yang mana seharusnya dirender sebelum tag `<div>` yang menjadi root, atau setelah tag `<body>`.

Untuk menggunakannya, pertama kita dapat menambahkan sebuah `<div>` baru di dalam folder public/index.html. Dengan nama `<div id="backdrop-root"></div> dan <div id="overlay-root"></div>`.

Langkah selanjutnya, kita perlu melakukan import React DOM pada file `src/components/UI/ErrorModal.js`. Setelah itu kita perlu memecah backdrop dan modal overlay menjadi 2 konstans berbeda. Dapat dilihat di file `src/components/UI/ErrorModal.js`.

Pada bagian render ErrorModal, kita dapat memberikan return value setelah fragments dengan `{ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}`. Langkah yang sama juga dilakukan pada modal overlay.

Apabila kita cek ke console di browser, maka akan mucul sebuah div baru dengan id `backdrop-root`, yang berisi sebuah backdrop.
