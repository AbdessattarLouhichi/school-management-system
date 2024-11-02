import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize ({
    database: process.env.DATA_BASE_NAME!,
    dialect: process.env.DB_DIALECT as any,
    port:process.env.PORT ? parseInt(process.env.PORT, 10) : 3306,
    username: process.env.DB_USERNAME!, 
    password: process.env.DB_PW!,
    models: [__dirname + '/../models']

})

export default sequelize