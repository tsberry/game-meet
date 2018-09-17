const router = require("express").Router();
const isAuthenticated = require("../../config/auth");
const userController = require("../../controllers/userController");
// LOGIN ROUTE
router.post('/login', userController.login);

// SIGNUP ROUTE
router.post('/signup', userController.signup);

// Any route with isAuthenticated is protected and you need a valid token
// to access
router.get('/:id', isAuthenticated, userController.getUser);

router.post("/add", userController.addMeet);

module.exports = router;