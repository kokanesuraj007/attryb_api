const asyncHandler = require("express-async-handler");
const inventoryModel = require("../model/inventory.model");

const allinventory = asyncHandler(async (req, res) => {
  const findinventory = await inventoryModel.find();
  res.send(findinventory);
});

const getInventoryByid = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const inventoryItem = await inventoryModel.findById(id);

    if (!inventoryItem) {
      return res.status(404).send("Inventory not found");
    }

    res.send(inventoryItem);
  } catch (error) {
    res.status(500).send("Something went wrong " + error);
  }
});

const createInventory = asyncHandler(async (req, res) => {
  try {
    const newInventory = await inventoryModel.create(req.body);
    res.send("Inventory created successfully: " + newInventory._id);
  } catch (error) {
    res.status(500).send("Something went wrong: " + error);
  }
});

const deleteInventory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInventory = await inventoryModel.findByIdAndDelete(id);

    if (!deletedInventory) {
      return res.status(404).send("Inventory not found");
    }

    res.send("Inventory deleted successfully");
  } catch (error) {
    res.status(500).send("Something went wrong: " + error);
  }
});

const getInventroysearch = asyncHandler(async (req, res) => {
  let query = req.query;

  let sortOption = {};

  if (query.price) {
    if (query.price === "highToLow") {
      query.price = { $gte: 0 };
      sortOption = { price: -1 };
    } else if (query.price === "lowToHigh") {
      query.price = { $gte: 0 };
      sortOption = { price: 1 };
    }
  }
  if (query.mileage) {
    query.mileage = { $gte: 0, $lte: Number(query.mileage) };
  }

  try {
    let data = await inventoryModel.find(query).sort(sortOption);
    res.send(data);
  } catch (err) {
    res.send({ err: err });
  }
});

const inventoryEdit = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const options = { new: true, runValidators: true };
    const updatedInventory = await inventoryModel.findByIdAndUpdate(
      id,
      updates,
      options
    );

    if (!updatedInventory) {
      res.status(404).send("inventory not found");
    } else {
      res.send("inventory updated successfully");
    }
  } catch (error) {
    res.status(500).send({ error: "Failed to update inventory" });
  }
});

module.exports = {
  allinventory,
  createInventory,
  deleteInventory,
  getInventoryByid,
  getInventroysearch,
  inventoryEdit,
};
