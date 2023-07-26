import mongoose from "mongoose";

mongoose.connect("");

const database = mongoose.connection;

export default database;