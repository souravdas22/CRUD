const express = require("express");
const Controller = require('../app/controller/HomeController')
const Router = express.Router();

//get
Router.get("/", Controller.default);
Router.get("/about", Controller.about);

Router.get("/users", Controller.getAllusers);
Router.get("/posts", Controller.getAllPosts);
Router.get("/products", Controller.getAllProducts);

// post
Router.post("/user", Controller.postUser);
Router.post("/post", Controller.postPost);
Router.post("/product", Controller.postProduct);


module.exports = Router;
