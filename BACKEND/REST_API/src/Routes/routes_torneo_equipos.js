const {Router} = require('express');
const controller = require('../Controllers/controller_torneo_equipos');

const router = Router();

router.get('/', controller.get);
router.get("/:id", controller.getById);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;