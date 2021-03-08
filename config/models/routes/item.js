const{Router} = require('express');
const itemcontrollers = require('../controllers/itemcontrollers');
const router = Router();
router.get('/items', itemcontroller.get_items);
router.post('/items',itemcontroller.post_item);
router.put('/items/:id',itemcontroller.update_item);
router.delete('/items/:id',itemcontroller.delete_item);

module.exports = router;