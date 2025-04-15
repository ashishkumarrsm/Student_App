// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../config/db');

// router.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   db.query('SELECT * FROM admins WHERE username = ?', [username], (err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

//     const admin = results[0];
//     bcrypt.compare(password, admin.password_hash, (err, isMatch) => {
//       if (err) return res.status(500).json({ error: err });
//       if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

//       const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       res.json({ token });
//     });
//   });
// });

// module.exports = router;




// Importing required modules
 import express from 'express';
 import bcrypt from 'bcrypt';
 import jwt from 'jsonwebtoken';
 import db from '../config/db.js';
 const router = express.Router();

 
 router.post('/login', (req, res) => {
   const { username, password } = req.body;
   db.query('SELECT * FROM admins WHERE username =?', [username], (err, results) => {
     if (err) return res.status(500).json({ error: err });
     if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
     const admin = results[0];
     bcrypt.compare(password, admin.password_hash, (err, isMatch) => {
       if (err) return res.status(500).json({ error: err });
       if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
       const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
       res.json({ token });
     });
    })
  })


 export default router;
