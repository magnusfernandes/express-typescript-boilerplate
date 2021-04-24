import { Optional, Model, BuildOptions, Sequelize, DataTypes } from "sequelize";

export interface ResponseAttributes {
  id: number;
  entryId: number;
  question: string;
  time: number;
  response?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResponseCreationAttributes
  extends Optional<ResponseAttributes, "id"> {}

export class ResponseModel
  extends Model<ResponseAttributes, ResponseCreationAttributes>
  implements ResponseAttributes {
  id!: number;
  entryId!: number;
  question!: string;
  time!: number;
  response!: any;

  // timestamps!
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

export type ResponseStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ResponseModel;
};

export function ResponseFactory(config: Sequelize) {
  return <ResponseStatic>config.define("responses", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    entryId: {
      type: DataTypes.BIGINT,
      references: {
        model: "entries",
        key: "id",
      },
    },
    question: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.FLOAT,
    },
    response: {
      type: DataTypes.JSONB,
    },
  });
}
