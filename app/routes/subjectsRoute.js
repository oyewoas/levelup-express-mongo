const express = require('express');
const router = express.Router();
const SubjectsController = require('../controllers/subjectsController');

//subjects Routes
router.post('/subjects/add', SubjectsController.createsubjects);
router.put('/subjects/update/:subject_code', SubjectsController.updatesubjects);
router.delete('/subjects/delete/:subject_code', SubjectsController.deletesubjects);
router.get('/subjects/get/:subject_code', SubjectsController.getasubjects);
router.get('/subjects', SubjectsController.getAllsubjects);



// router.put('/', SubjectsController.create_subjects);
// router.delete('/', SubjectsController.create_subjects);






module.exports = router;