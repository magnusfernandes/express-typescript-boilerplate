import { Optional, Model, BuildOptions, Sequelize, DataTypes } from "sequelize";

export interface UserOtpAttributes {
  id: number;
  userId: number;
  code: string;
  retries: number;
  sentAt: Date;
  usedAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserOtpCreationAttributes extends Optional<UserOtpAttributes, "id"> { }

export class UserOtpModel extends Model<UserOtpAttributes, UserOtpCreationAttributes> implements UserOtpAttributes {
  id!: number;
  userId!: number;
  code!: string;
  retries!: number;
  sentAt!: Date;
  usedAt!: Date;

  // timestamps!
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

export type UserOtpStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): UserOtpModel;
};

export function UserOtpFactory(config: Sequelize) {
  return <UserOtpStatic>config.define("userOtps", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    retries: DataTypes.INTEGER,
    sentAt: DataTypes.DATE,
    usedAt: DataTypes.DATE
  });
};