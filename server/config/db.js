const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sravani:sravani508@clusterrr.ewnzeqf.mongodb.net/?retryWrites=true&w=majority&appName=clusterrr");

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

