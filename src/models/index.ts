import { Sequelize, Optional, Model, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, BuildOptions, DataTypes, BelongsToGetAssociationMixin } from "sequelize";
import database from "../config/database.json";
import { UserFactory, UserModel } from "./user.model";
import { UserOtpFactory, UserOtpModel } from "./user-otp.model";

const env = process.env.NODE_ENV || 'development';

const db: any = database;
const config = db[env];

export const dbConfig = new Sequelize(config.database, config.username, config.password, config);
export const User = UserFactory(dbConfig);
export const UserOtp = UserOtpFactory(dbConfig);

User.hasMany(UserOtp, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'otps'
});


UserOtp.belongsTo(User, {
  targetKey: 'id'
});

export {
  UserModel,
  UserOtpModel
}