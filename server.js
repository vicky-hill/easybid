const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());

// Enable cors
app.use(cors());

// Mount Routes
app.use('/api/user', require('./routs/auth'));


app.listen(PORT, console.log('Server running on ' + PORT));