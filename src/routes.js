const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

const router = require('express').Router();

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage)
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getNewCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getDetails);


module.exports = router;
