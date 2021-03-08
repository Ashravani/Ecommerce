const { Router } = require('express');
const ordercontroller = require('../controllers/ordercontrollers');
const router = Router();

router.get('/order/:id',ordercontroller.get_orders);
router.post('/order/:id',ordercontroller.checkout);

module.exports = router;