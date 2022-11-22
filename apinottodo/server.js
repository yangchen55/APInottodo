import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

import morgan from "morgan";
//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

import mongoConnect from './src/config/dbConfig.js'
mongoConnect();


// api endpoint
import taskRouter from './src/taskRouter.js'
app.use('/api/v1/task', taskRouter);
app.use("*",(error, req, res, next)  => {
  res.status(400).json({
    status:"error",
    messsage: "invalid request",
  });
});

app.use("*",(error, req, res, next)  => {
  res.status(500).json({
    status:"error",
    messsage: error.messsage,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
