const {Router} = require('express');
const controller = require('../Controllers/controller_partido');

const router = Router();

router.get('/', controller.get);
router.get("/:id", controller.getById);
router.get("/partido_torneo/:id", controller.getByTorneo);
router.get("/partido_Spc/:id", controller.getByPartido);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;