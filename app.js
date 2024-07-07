const express = require("express");
const dotenv = require('dotenv');
const ejs = require("ejs");
const dbConnecton = require('./app/config/db')
const HomeRouter = require("./routes/home.router");
const bodyParser = require('body-parser');
dotenv.config()
const app = express();

dbConnecton();



app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.json());
app.use(HomeRouter);



const port = 7000;
app.listen(port, () => console.log(`App is running on http://localhost:${port}`));