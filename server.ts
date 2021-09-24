import dotenv from "dotenv";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "morgan";
import { passport } from "./passport";

import {
  authRoutes
} from "./src/routes";

dotenv.config();

const app = express();
const server = http.createServer(app);

const port = parseInt(process.env.PORT || "0") || 4000;
const hostname: string = "127.0.0.1";

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

app.get('/', (req, res, next) => {
  res.send('Hello world!');
});

authRoutes(app);

server.listen(port, hostname, undefined, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})