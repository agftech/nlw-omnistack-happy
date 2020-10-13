import express from "express";
const path = require("path");
import cors from "cors";
import "express-async-errors";
import errorHandler from "./errors/handler";

import "./database/connection";

import routes from "./routes";

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333);
