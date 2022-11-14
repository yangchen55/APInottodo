import express from "express";
const app = express();
const PORT = 8000;

import morgan from "morgan";
//middleware
app.use(morgan("dev"));
app.use(express.json());


// api endpoint
import taskRouter from './src/taskRouter.js'
app.use('/api/v1/task', taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
