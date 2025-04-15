// const express = require('express');
// const router = express.Router();
// const db = require('../config/db');
// const authMiddleware = require('../middleware/auth');

// router.get('/', (req, res) => {
//   db.query('SELECT * FROM students', (err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(results);
//   });
// });

// router.post('/', authMiddleware, (req, res) => {
//   const { name, age, grade } = req.body;
//   db.query('INSERT INTO students (name, age, grade) VALUES (?, ?, ?)', [name, age, grade], (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.status(201).json({ id: result.insertId, name, age, grade });
//   });
// });

// module.exports = router;







import express from 'express'

const router = express.Router()

import db from '../config/db'

import authMiddleware from '../middleware/auth'

router.get('/', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).json({ error: err })
    res.json(results)
  })
})

router.post('/', authMiddleware, (req, res) => {
  const { name, age, grade } = req.body
  db.query('INSERT INTO students (name, age, grade) VALUES (?, ?, ?)', [name, age, grade], (err, result) => {
    if (err) return res.status(500).json({ error: err })
    res.status(201).json({ id: result.insertId, name, age, grade })
  })
})

export default router
