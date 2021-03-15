const express = require("express");
const fileDb = require("../fileDb");
const router = express.Router();

router.get("/", (req, res) => {
  const products = fileDb.getItems();
  res.send(products);
});
router.get("/:id", (req, res) => {
  const productsById = fileDb.getItemById(req.params.id);
  res.send(productsById);
});

router.post("/", (req, res) => {
  if (!req.body) {
    res.status(400).send({
      error: "Not enough data to add new record",
    });
  } else {
    res.status(200).send(`Successfully added${JSON.stringify(req.body)}`);
    return fileDb.addItem(req.body);
  }
});

module.exports = router;
