const express                               = require('express');
const router                                = express.Router();
const UserController                        = require('../controllers/UserController');
const EquityOrderController                 = require('../controllers/EquityOrderController');
const CambioOrderController                 = require('../controllers/CambioOrderController');
const auth                                  = require('../middleware/auth');
const { userValidationRules, validate }     = require('../validators/validators');
const webScrapping                          = require('../controllers/WebScrapping');
const webScrapingContoller                          = require('../controllers/WebScrapingController');

/* GET users details. */
router.post('/user-details', auth.checkAuth,async function (req, res, next) {
  res.json('hello');
  next();
}
);

router.post('/signup', userValidationRules('signup'), UserController.milSignUp);
router.post('/login', userValidationRules('login'), validate, UserController.milSignIn);

/**
 * Equity end points for client portal
 */

 router.post('/order/initiate-equity-order',auth.checkAuth, userValidationRules('initiate-equity-order'), validate, EquityOrderController.initiateEquityOrder);

 //Cambio Module

 router.post('/initiate-cambio-order',auth.checkAuth, userValidationRules('initiate-cambio-order'), validate, CambioOrderController.Initate);


 // Web Scrapping
 router.post('/web-scrapping',userValidationRules('web-scrapping'),validate,webScrapping.webScrapping)

 router.get('/web-scraping-jm',webScrapingContoller.webScrapingContoller)

module.exports = router;