const express = require('express');
const router = express.Router();
const multer =  require('../middleware/multer-config')
const auth = require('../middleware/auth')

const routeCtrl = require('../controllers/sauces')

router.get('/', routeCtrl.GetSauces)
router.post('/',multer, routeCtrl.NewSauce)

router.get('/:id', routeCtrl.OneSauce)
router.put('/:id', auth, routeCtrl.ChangeSauce)
router.delete('/:id', auth, routeCtrl.DelSauce)
router.post('/:id/like', auth, routeCtrl.Like)

module.exports = router;