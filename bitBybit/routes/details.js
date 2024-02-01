const express = require('express');
const router=express.Router();
// getting user controller
const detailsController = require('../controllers/details.controller');
router.get('/',detailsController.details);
// update route for habits
router.post('/update-task/',detailsController.update);
module.exports=router;