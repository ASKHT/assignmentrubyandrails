import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import userroute from "./routes/user.route.js"

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1/addpatient", userroute);

export default app;
