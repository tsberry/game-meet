const router = require("express").Router();
const meetController = require("../../controllers/meetController");
const isAuthenticated = require("../../config/auth");

router.post("/", meetController.saveMeet);
router.get("/:id", isAuthenticated, meetController.getMeet);


module.exports = router;