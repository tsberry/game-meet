const router = require("express").Router();
const meetController = require("../../controllers/meetController");
const isAuthenticated = require("../../config/auth");

router.post("/", meetController.saveMeet);
router.get("/search", meetController.search);
router.get("/:id", isAuthenticated, meetController.getMeet);
router.get("/", meetController.getAll);

module.exports = router;