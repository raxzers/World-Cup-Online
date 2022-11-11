const {Router} = require('express');
const controller = require('../Controllers/controller_paises_fifa');

const router = Router();

router.get('/', controller.get);
router.post("/", controller.add);
router.delete("/:id", controller.remove);

module.exports = router;