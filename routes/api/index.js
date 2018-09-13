const router = require("express").Router();
const meetRoutes = require("./meet");

router.use("/meet", meetRoutes);

module.exports = router;