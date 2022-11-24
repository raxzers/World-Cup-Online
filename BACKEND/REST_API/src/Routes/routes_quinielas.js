const {Router} = require('express');
const controller = require('../Controllers/controller_quinielas');

const router = Router();

router.get('/', controller.get);
router.get("/:id", controller.getById);
router.get("/name_torneo/:id", controller.getByname_Torneo);
router.get("/name_usuario/:id", controller.getByname_Usuario);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;