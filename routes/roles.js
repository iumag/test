const express = require('express');
let router = express.Router();
let roleController = require('../controllers/roleController');

/* GET users listing. */
router.get("/", roleController.getAll);

router.get("/:id", roleController.get);

router.post("/", roleController.create);

router.put("/:id", roleController.update);

router.delete("/:id", roleController.deleteById);


module.exports = router;
