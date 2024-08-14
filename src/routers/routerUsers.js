const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const middlewareUsers = require("../middlewares/usersMiddleware");

router.get("/users", usersController.getAllUsers);
router.get(
  "/users/:id",
  middlewareUsers.getUserMiddleware,
  usersController.getUserById
);

router.post(
  "/users",
  middlewareUsers.insertUserMiddleware,
  usersController.createUser
);
router.put(
  "/users/:id",
  middlewareUsers.updateUserMiddleware,
  usersController.updateUser
);
router.delete(
  "/users/:id",
  middlewareUsers.deleteUserMiddleware,
  usersController.deleteUser
);

module.exports = router;
