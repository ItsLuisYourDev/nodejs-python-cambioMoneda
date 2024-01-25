const { Router } = require('express')
const router = Router()
const Moneda = require('../Controllers/controllerMoneda')

router.get('/',Moneda.consultar_todo);
router.get('/:id',Moneda.consultar1);
router.post('/',Moneda.guardar_nuevo);
router.put('/',Moneda.actualiza_datos);
router.delete('/:id',Moneda.elimina1);

module.exports = router;
