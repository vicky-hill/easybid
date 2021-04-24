const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URI;

const connectDB = async.env.DB_URI;

const connectDB = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    
    console.log('MongoDB connected ...');
}

module.exports = connectDB;