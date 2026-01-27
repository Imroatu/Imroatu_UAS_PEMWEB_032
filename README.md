# UAS PEMROGRAMAN WEB
project ini digunakan untuk memenuhi tugas akhir semester mata kuliah pemrograman web. membuat aplikasi web sederhana yang berbasis React, Node.js, dan Ethereum atau Sepolia

## Fitur-fitur 
- Koneksi wallet metamask
- Menampilkan saldo wallet
- Menampilkan transaksi backend
- Intergrasi blockchain

## Instalasi
### Backend
1. Node.js
2. Express.js

### Frontend
1. React.js
2. Ethers.js
3. CSS Grid & Flexbox

## Blockchain
- Ethereum
- Sepolia

## Arsitektur sistem
1. frontend menghubungkan wallet dengan metamask
2. Ethers.js untuk mengambil saldo wallet
3. frontend rest api backend untuk mengambil data transaksi
4. frontend membaca data dari smart contract Ethereum
5. data dapat ditampilkan antarmuka web secara responsif

## cara instalasi dan menjalankan aplikasi
### 1. menjalankan backend
```bash
cd backend
npm install
node index.js
```
maka backend berjalan di: 
http://localhost:5000

### 2. menjalankan frontend
``` bash
cd frontend
npm install
npm run dev
```
maka frontend jalan di:
http://localhost:5173

## penanganan error
- jika metamask tidak tersedia, aplikasi menampilkan pesan
- jika pengguna menolak koneksi wallet, aplikasi tidak crash
- jika koneksi blockchain gagal, dapat ditangani menggunakan try-catch
  
