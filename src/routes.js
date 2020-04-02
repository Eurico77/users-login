const express = require("express");

const EmployeesController = require("./controllers/EmployeesController");
const PatientsController = require("./controllers/PatientsController");

const routes = express.Router();

//Rotas de criação e listagem dos Funcionarios
routes.post("/users", EmployeesController.store);
routes.get("/users", EmployeesController.index);





module.exports = routes;
