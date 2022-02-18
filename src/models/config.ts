import { Sequelize } from "sequelize";
import database from "../config/database.json";

const env = process.env.NODE_ENV || "development";

const db: any = database;
const config = db[env];

export const dbConfig = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
