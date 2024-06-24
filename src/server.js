import express, { json } from "express";
import authRoute from "./routes/authRoute.js";

const app = express();

app.use(json());
app.use(authRoute);

app.listen(5000, () => console.log("Server is running on port 5000"));
