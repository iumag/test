const express = require('express');
let router = express.Router();
let controller = require('../controllers/orderController');

router.get("/:id", controller.get);

router.post("/", controller.create);

router.put("/:id", controller.update);

router.delete("/:id", controller.deleteById);

module.exports = router
