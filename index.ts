import express from "express";
import { config } from "dotenv";
import cors from "cors";

//import connectDB from "./config/db";
import { getRouter } from "./src/router/line";


config({ path: "./config/config.env" });

//connectDB();

const app = express();

app.use(cors());

const secret = process.env.LINE_SECRET || "";

app.use("", getRouter(secret));

const PORT = process.env.PORT || 5005;
const server = app.listen(PORT, () =>
  console.log(
    "Server running in ",
    process.env.NODE_ENV,
    " mode on port ",
    PORT
  )
);

process.on("unhandledRejection", (err: Error) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
export default app;
