const express = require('express');
const router = express.Router();

// getting homepage controller
const homeController = require('../controllers/home.controller');
router.get('/',homeController.home);
// create habit route
router.post('/create-task',homeController.create);
// delete habit route
router.get('/delete-task/',homeController.delete);
// use details routes
router.use('/details',require('./details'))


module.exports=router;