const express = require("express");
const router = express.Router();
const Image = require("../models/image");

//GET ALL
router.get("/", async (req, res) => {
  try {
    const imagesData = await Image.find();
    res.json(imagesData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//GET ONE
router.get("/:id", async (req, res) => {});

//CREATE ONE
router.post("/", async (req, res) => {
  const imageData = new Image({
    name: req.body.name,
    imgUrl: req.body.imgUrl,
  });

  try {
    const newImage = await imageData.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//CREATE MULTY
router.post("/", async (req, res) => {});

//DELETE
router.delete("/:id", async (req, res) => {});

module.exports = router;
