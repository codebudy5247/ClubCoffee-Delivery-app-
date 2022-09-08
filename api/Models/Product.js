const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    prices: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
