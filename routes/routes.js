const express = require('express')
const HomeController = require('../controllers/Home/HomeController')
const router = express.Router()

const Home = require('../controllers/Home/HomeController')
const UserCreateController = require('../controllers/User/UserCreateController')
const UsersGetController = require('../controllers/User/UsersGetController')
const LoginController = require('../controllers/Login/LoginController')
const UserDelleteController = require('../controllers/User/UserDelleteController')
const UserUpdateController = require('../controllers/User/UserUpdateController')
const CreateSessionsController = require('../controllers/Sessions/CreateSessionsController')
const GetSessionsController = require('../controllers/Sessions/GetSessionsController')
const DeleteSessionController = require('../controllers/Sessions/DeleteSessionController')
const UpdateSessionController = require('../controllers/Sessions/UpdateSessionController')
const PhotoPostController = require('../controllers/Photos/PhotoPostController')
const PhotosGetController = require('../controllers/Photos/PhotosGetController')
const PhotoDeleteController = require('../controllers/Photos/PhotoDeleteController')
const PricesUpdateController = require('../controllers/Prices/PricesUpdateController')

//HOme
router.get('/', Home.getInfo)


// User
router.post('/user', UserCreateController.execute)
router.get('/users', UsersGetController.execute)
router.get('/user/:id', UsersGetController.byId)
router.delete('/user/:id', UserDelleteController.execute)
router.put('/user/:id', UserUpdateController.execute)


// Login
router.post('/login', LoginController.execute)


// Sessions
router.post('/session', CreateSessionsController.execute)
router.get('/sessions', GetSessionsController.all)
router.get('/session/:id', GetSessionsController.byId)
router.delete('/session/:id', DeleteSessionController.execute)
router.put('/session/:id', UpdateSessionController.execute)


// Photos
router.post('/photo', PhotoPostController.execute)
router.get('/photos', PhotosGetController.all)
router.get('/photo/model', PhotosGetController.with_model_name)
router.get('/photo/category', PhotosGetController.by_category)
router.get('/photo/:id', PhotosGetController.byId)
router.put('/photo/:id', PhotoPostController.post_view)
router.delete('/photo/:id', PhotoDeleteController.execute)


// Prices
router.put('/prices', PricesUpdateController.execute)


module.exports = router