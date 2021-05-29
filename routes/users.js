const express=require('express');
const { route } = require('.');
const router=express.Router();
const usersController=require('../controllers/users_controller');

router.get('/profile',usersController.profile);
router.get('/sign_in',usersController.sign_in);
router.get('/sign_up',usersController.sign_up);
router.post('/create',usersController.create);

module.exports=router;
