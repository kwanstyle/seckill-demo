import express from "express";
import bodyParser from "body-parser";
import * as controllers from "./controller.js";
import mysqlClient from "./setup.js";

const app = express();
const port = 8082;

app.use(bodyParser.urlencoded({ extended: true }));
app.locals.mysqlClient = mysqlClient;

app.post("/", controllers.createUser);
app.get("/", controllers.getUsers);
app.get("/:id", controllers.getUserById);

app.listen(port, () => {
    console.log(`Account app listening at http://localhost:${port}`);
});