const { Router } = require('express');
const cartcontroller = require('../controllers/cartcontrollers');
const router = Router();

router.get('/cart/:id',cartcontroller.get_cart_items);
router.post('/cart/:id',cartcontroller.add_cart_item);
router.delete('/cart/:userId/:itemId',cartcontroller.delete_item);

module.exports = router;