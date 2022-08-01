import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/password-diary');
    console.log('DB connection established.');
  } catch (err) {
    throw new Error('Database connection failed.');
  }
};

export default dbConnection;
