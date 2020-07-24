"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = require("./passport");
const routes_1 = require("./src/routes");
dotenv_1.default.config();
const app = express_1.default();
const server = http_1.default.createServer(app);
const port = parseInt(process.env.PORT || "0") || 4000;
const hostname = "127.0.0.1";
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(passport_1.passport.initialize());
app.get('/', (req, res, next) => {
    res.send('Hello world!');
});
routes_1.authRoutes(app);
server.listen(port, hostname, undefined, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
