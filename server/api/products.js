const router = require("express").Router();
const {
  models: { Product },
} = require("../db");

// GET /products - fetches all products in database
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    console.error(err);
  }
});

// POST for adding product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(product);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(`${req.params.id}`);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
