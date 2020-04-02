const express = require("express");

const UsersController = require("./controllers/UsersController");


const routes = express.Router();

//Rotas 

routes.post("/users", UsersController.store);
routes.get("/users", UsersController.index);






module.exports = routes;
