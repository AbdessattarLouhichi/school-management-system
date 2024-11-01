import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    database: 'school_management',
    dialect: 'mysql',
    port:3306,
    username: 'root', 
    password: '/*@Root@1988*/',
    models: [__dirname + '/../models']

})

export default sequelize