import mongoose from 'mongoose';

/**
 * Connect to MongoDB instance using Mongoose.
 * Logs connection host on success or warns if connection fails,
 * ensuring the server remains testable even before local DB setup.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB Warning]: Could not connect to MongoDB: ${error.message}`);
    console.warn('[MongoDB Notice]: The server will continue running. You can connect a local MongoDB or a free MongoDB Atlas cloud URI in .env.');
  }
};

export default connectDB;
