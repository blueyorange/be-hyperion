const express = require("express");
const router = express.Router();

const {
  getPresentations,
  readPresentation,
  createPresentation,
  updatePresentation,
  deletePresentation,
} = require("../controllers/presentations.controller.js");

router.get("/", getPresentations);
router.get("/:_id", readPresentation);
router.post("/", createPresentation);
router.patch("/:_id", updatePresentation);
router.delete("/:_id", deletePresentation);

module.exports = router;
