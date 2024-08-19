const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
    '/login',
    // authMiddleware.loginMiddleware, 
    authController
    );

module.exports = router;