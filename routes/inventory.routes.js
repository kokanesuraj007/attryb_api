const express = require("express");
const {
  allinventory,
  createInventory,
  deleteInventory,
  getInventoryByid,
  getInventroysearch,
  inventoryEdit,
} = require("../controller/inventory.controller");
const inventoryRouter = express.Router();

inventoryRouter.get("/", allinventory);
inventoryRouter.get("/search", getInventroysearch);
inventoryRouter.get("/:id", getInventoryByid);
inventoryRouter.post("/", createInventory);
inventoryRouter.delete("/:id", deleteInventory);
inventoryRouter.patch("/:id", inventoryEdit);

module.exports = inventoryRouter;
