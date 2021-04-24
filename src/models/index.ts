import { Sequelize } from "sequelize";
import database from "../config/database.json";
import { UserFactory, UserModel } from "./user.model";
import { UserOtpFactory, UserOtpModel } from "./user-otp.model";
import { EntryFactory, EntryModel } from "./entry.model";
import { ResponseFactory, ResponseModel } from "./response.model";

const env = process.env.NODE_ENV || "development";

const db: any = database;
const config = db[env];

export const dbConfig = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
export const User = UserFactory(dbConfig);
export const UserOtp = UserOtpFactory(dbConfig);
export const Entry = EntryFactory(dbConfig);
export const Response = ResponseFactory(dbConfig);

User.hasMany(UserOtp, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "otps",
});

UserOtp.belongsTo(User, {
  targetKey: "id",
});

Entry.hasMany(Response, {
  sourceKey: "id",
  foreignKey: "entryId",
  as: "responses",
});

Response.belongsTo(Entry, {
  targetKey: "id",
});

export { UserModel, UserOtpModel, EntryModel, ResponseModel };
