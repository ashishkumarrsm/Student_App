// const mysql = require('mysql');
// require('dotenv').config();

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// connection.connect(err => {
//   if (err) throw err;
//   console.log('Connected to MySQL');
// });

// module.exports = connection;




import {createPool, mysql } from 'mysql2'
import dotenv from dotenv

const pool= createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

pool.getConnection((err, connection) => {
  if(err) throw err;
  console.log('Connected to MySQL');
})

module.exports = pool;