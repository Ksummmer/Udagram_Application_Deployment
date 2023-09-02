import { Sequelize, SequelizeOptions  } from "sequelize-typescript";
import { config } from "./config/config";

const options: SequelizeOptions = {
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  //port: config.port,
  dialect: "postgres",
  //native: true,
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false 
    }
  },
  storage: ":memory:",
  logging: console.log
};

console.log(config);


export const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}:5432/${config.database}`, 
options);
//export const sequelize = new Sequelize("postgres://postgres:postgres@database-1.cbvrutqt8uib.us-east-1.rds.amazonaws.com:5432/postgres");

