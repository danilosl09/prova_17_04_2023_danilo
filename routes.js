const express = require("express");
const manipulation = require("./manipulation");

const routes = express.Router();

routes.get("/indice", manipulation.getAllProducts);

module.exports = routes;