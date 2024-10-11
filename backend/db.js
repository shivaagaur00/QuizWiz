import mongoose from "mongoose";

const URL =
  "mongodb+srv://prashantpathak6395:xoDpZ5pYTwlwBbqp@database.snicp.mongodb.net/?retryWrites=true&w=majority&appName=database";

async function db() {
  try {
    await mongoose.connect(URL);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
}

export default db;
