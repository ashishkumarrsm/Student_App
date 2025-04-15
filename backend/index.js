// const express = require('express');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const studentRoutes = require('./routes/students');
// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/auth', authRoutes);
// app.use('/students', studentRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




import express from 'express';
import dotenv from 'dotenv';
import auth from './routes/auth.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', auth);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
