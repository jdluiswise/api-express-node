const express = require("express");
const router = express.Router();
const Image = require("../models/image");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.

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
router.post("/", async (req, res) => {});

//CREATE MULTY
router.post("/", async (req, res) => {});

//DELETE
router.delete("/:id", async (req, res) => {});

module.exports = router;
