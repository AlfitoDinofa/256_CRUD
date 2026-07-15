const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Konfigurasi Connection Pool ke PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: '123',
    port: 5432,
});

app.use(express.json());



// Menjalankan Server Express
app.listen(port, () => {
    console.log('Server berjalan di http://localhost:3000');
});