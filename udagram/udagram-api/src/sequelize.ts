import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// const options: SequelizeOptions = {
  // username: config.username,
  // password: config.password,
  // database: config.database,
  // host: config.host,
  // port: config.port,
  // dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true, 
//       rejectUnauthorized: false 
//     }
//   },
//   storage: ":memory:",
//   logging: console.log
// };

// console.log(config);
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
  dialectOptions: {
        ssl: {
          require: true, 
          rejectUnauthorized: false 
        }
      }
});

// export const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`, 
// options);
