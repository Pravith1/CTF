const mongoose  = require('mongoose');
require('dotenv').config();

const connectDB = async () => 
{mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));
}


module.exports = connectDB;