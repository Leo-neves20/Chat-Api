import 'reflect-metadata'
import path from "path";
import "dotenv/config"
import { DataSourceOptions, DataSource } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {

    const entities   = [path.join(__dirname, "./entities/**.{js,ts}")] 
    const migrations = [path.join(__dirname, "./migrations/**.{js,ts}")]

    const nodeEnv = process.env.NODE_ENV

    if(nodeEnv === "production"){
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities,
            migrations
        }
    }

    return {
        type: "postgres",
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB,
        synchronize: false,
        logging: true,
        entities,
        migrations
    }
}

const dataSource    = dataSourceConfig()
const AppDataSource = new DataSource(dataSource)

export default AppDataSource