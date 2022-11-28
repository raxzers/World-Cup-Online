const {Router} = require('express');
const controller = require('../Controllers/controller_ranking_privado');

const router = Router();

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/comunidad/:id', controller.getByComunidad );
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;