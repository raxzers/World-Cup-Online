const {Router} = require('express');
const controller = require('../Controllers/controller_ranking');

const router = Router();

router.get('/', controller.get);
router.get("/:id", controller.getById);
router.get("/nombres/", controller.getXNombres);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;