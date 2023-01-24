const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

const router = require('express').Router();

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage)
router.get('/create', cubeController.getNewCube);
router.post('/create', cubeController.postCreateCube);

module.exports = router;
