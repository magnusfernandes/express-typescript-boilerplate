import {
  Association,
  DataTypes,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from "sequelize";
import { UserOtp } from ".";
import { dbConfig } from "./config";

export class User extends Model<
  InferAttributes<User, { omit: "userOtps" }>,
  InferCreationAttributes<User, { omit: "userOtps" }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare phone: string;
  declare role: CreationOptional<string>;
  declare profilePic: CreationOptional<string>;
  declare passwordHash: CreationOptional<string>;
  declare address: CreationOptional<string>;

  // timestamps!
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;

  declare getOtps: HasManyGetAssociationsMixin<UserOtp>;
  declare createOtp: HasManyCreateAssociationMixin<UserOtp, "userId">;

  declare userOtps?: NonAttribute<UserOtp[]>;

  declare static associations: {
    userOtps: Association<User, UserOtp>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING(128),
      defaultValue: "end_user",
    },
    profilePic: DataTypes.STRING(128),
    passwordHash: DataTypes.STRING(128),
    address: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "users",
    sequelize: dbConfig,
  }
);
