const{Router} = require('express');
const authcontroller =require('../controllers/authcontrollers');
const router = Router();
const auth = require('../middleware/auth');

router.post('/register',authcontrollers.signup);
router.post('login',authcontrollers.login);
router.get('/user',auth,authcontroller.get_user);
 module.exports = router;