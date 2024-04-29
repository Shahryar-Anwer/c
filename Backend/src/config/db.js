// Database Connection
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL);
    console.log(`Connected To Database Successfully`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();
