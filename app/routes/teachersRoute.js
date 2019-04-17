const express = require('express');
const router = express.Router();
const TeachersController = require('../controllers/teachersController');

//Teacher Routes
router.post('/teacher/signup', TeachersController.createTeacher);
router.put('/teacher/update/:_id', TeachersController.updateTeacher);
router.delete('/teacher/delete/:_id', TeachersController.deleteTeacher);
router.get('/teacher/get/:_id', TeachersController.getaTeacher);
router.get('/teachers', TeachersController.getAllTeachers);



// router.put('/', TeachersController.create_teacher);
// router.delete('/', TeachersController.create_teacher);






module.exports = router;