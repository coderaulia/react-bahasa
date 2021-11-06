# Advanced React

Pada repositori ini, kita akan mengulik lebih dalam beberapa fitur yang lebih advance dari React. Pertama kita perlu membuat sebuah project baru dengan create-react-app. `npx create-react-app advance-react`.

Untuk base project anda dapat mendownloadnya dari folder ini.

## Fragments

JSX mengharuskan kita untuk memiliki satu tag yang menjadi root atau induk dari beberapa tag. Misalnya ada dua tag `<div>` dan `<span>`, atau `<h2>` dengan `<p>`, secara otomatis akan terjadi error, maka kita harus memiliki satu tag yang menjadi root.

Tentunya kita dapat menggunakan tag `<div>` sebagai root untuk menampung tag-tag tadi. Akan tetapi, dalam projek yang lebih besar nantinya, kita akan memiliki banyak tag `<div>` yang tidak diperlukan.

Solusinya kita dapat menggunakan Fragments. Kita dapat mendefinisikan fragments dengan menggunakan tag `<>` dan `</>`.

Contohnya dapat dilihat di folder src/components/Users/AddUser.js
