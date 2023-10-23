const express = require("express");
const router = express.Router();
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.

//GET ALL
router.get("/", (req, res) => {
  res.send("Hello The Wise");
});

//GET ONE
router.get("/:id", (req, res) => {});

//CREATE ONE
router.post("/", (req, res) => {});

//CREATE MULTY
router.post("/", (req, res) => {});

//DELETE
router.delete("/:id", (req, res) => {});

module.exports = router;
