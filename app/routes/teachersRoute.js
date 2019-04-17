const express = require('express');
const router = express.Router();
const TeachersController = require('../controllers/teachersController');

//Teacher Routes
router.post('/', TeachersController.create_teacher);





module.exports = router;