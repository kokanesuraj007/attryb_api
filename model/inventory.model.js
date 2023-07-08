const mongoose = require("mongoose");

var inventorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    engine: { type: String, required: true },
    fuel: { type: Number, required: true },
    mileage: { type: Number, required: true },
    max_speed: { type: Number, required: true },
    img: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const inventoryModel = mongoose.model("inventory", inventorySchema);
module.exports = inventoryModel;
