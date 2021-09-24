import { Optional, Model, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, BuildOptions, Sequelize, DataTypes } from "sequelize";
import { UserOtpModel } from "./user-otp.model";

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  phone: string;
  role?: string;
  profilePic?: string;
  passwordHash?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

export class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: number;
  name!: string;
  email!: string;
  phone!: string;
  role!: string;
  profilePic!: string;
  passwordHash!: string;
  address!: string;

  // timestamps!
  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  public createOtp!: HasManyCreateAssociationMixin<UserOtpModel>;
  public getOtps!: HasManyGetAssociationsMixin<UserOtpModel>;

}

export type UserStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): UserModel;
};

export function UserFactory(config: Sequelize) {
  return <UserStatic>config.define("users", {
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
      defaultValue: 'end_user'
    },
    profilePic: DataTypes.STRING(128),
    passwordHash: DataTypes.STRING(128),
    address: DataTypes.TEXT,
  });
};