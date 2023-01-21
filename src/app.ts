import "express-async-errors"
import express         from "express";
import usersRoutes     from "./routes/user.routes";
import { handleError } from "./errors/error";

const app = express()
app.use(express.json())

app.use("/user", usersRoutes)

app.use(handleError)

export default app