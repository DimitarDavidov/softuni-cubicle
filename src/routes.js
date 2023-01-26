const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController')

const router = require('express').Router();

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage)
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getNewCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getDetails);

router.use('/accessory', accessoryController)


module.exports = router;
