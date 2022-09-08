const Product = require("../Models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, description, images, prices,discount } = req.body;
    const newProduct = new Product({
      name,
      description,
      images,
      prices,
      discount
    });
    await newProduct.save();
    res.json({ newProduct });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const projects = await Product.find();
    res.status(200).json({
      success: true,
      message: projects,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
