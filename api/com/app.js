import express from "express";
import mongoose from "mongoose";
import models from "./models/index.js";
import cors from "cors";
import route from "./routes/index.js";

//use express 
const app = express();
//handle cors policy and set json format for data.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//set the route for api.
route(app);

//connect to mongodb.
mongoose.connect('mongodb://localhost:27017/LTCdb');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

export default app;