import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { dbConfig } from "./config";

export class UserOtp extends Model<
  InferAttributes<UserOtp>,
  InferCreationAttributes<UserOtp>
> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare code: string;
  declare retries: CreationOptional<number>;
  declare sentAt: CreationOptional<Date>;
  declare usedAt: CreationOptional<Date>;

  // timestamps!
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

UserOtp.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    retries: DataTypes.INTEGER,
    sentAt: DataTypes.DATE,
    usedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "userOtps",
    sequelize: dbConfig,
  }
);
