import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);