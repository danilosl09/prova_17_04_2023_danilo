const express = require("express");
const manipulation = require("./manipulation");

const routes = express.Router();

routes.get("/indice", manipulation.getAllProducts);
routes.get("/indice/:id", manipulation.getProductById);
routes.post("/indice/:id", manipulation.createProductById);
routes.put("/indice/:id", manipulation.updateProductById);
routes.delete("/indice/:id", manipulation.deleteProductById);



module.exports = routes;