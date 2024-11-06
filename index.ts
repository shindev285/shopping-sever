import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./src/routers/user";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 3001;
const dbURL = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.ex4su.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
const connecDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Connected to DB successfully");
  } catch (error) {
    console.log(`Can not connec to DB ${error}`);
  }
};
connecDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`sever is stating at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
