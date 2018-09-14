const router = require("express").Router();
const meetRoutes = require("./meet");
const userRoutes = require("./user");

router.use("/meet", meetRoutes);
router.use("/user", userRoutes);

module.exports = router;