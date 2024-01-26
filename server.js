import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import connectionDb from "./config/db.js";
import router from "./routes/user.route.js";
import morgan from "morgan";

connectionDb();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
