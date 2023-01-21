import app from "./app";
import AppDataSource from "./data-source";

AppDataSource.initialize().then(() => {
    console.log("database connected")

    app.listen(3000, () => {
        console.log("server is running in port 3000")
    })
})