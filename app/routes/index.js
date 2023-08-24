const express = require("express");
const userController = require("../contorllers/userController");

const router = express.Router();

router.get("/users", userController.getAllUsers);

router.get("/user/:userId", userController.getOneUser);

router.post("/user", userController.createNewUser);

router.patch("/user/:userId", userController.updateUser);

router.delete("/user/:userId", userController.deleteUser);

module.exports = router;
