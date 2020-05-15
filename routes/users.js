const express = require('express');
let router = express.Router();
let userController = require('../controllers/UserController')

/* GET users listing. */
router.get("/", userController.getAll);

router.get("/:id", userController.get);

router.post("/", userController.create);

router.put("/:id", userController.update);

router.delete("/:id", userController.deleteById);

router.post("/login", userController.login);

module.exports = router;
