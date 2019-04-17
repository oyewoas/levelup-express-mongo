const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    subject_name: {
        type: String, 
        required: true, 
        max: 200
    },
    teacher_name: {
        type: String, 
        required: true
    },
    hours_weekly: {
        type: Number,
    },
    offered_by: {
        type: String,
        enum: ['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'],
    }

    
});

const SubjectsModel = mongoose.model('Subjects', SubjectSchema);

module.exports = SubjectsModel;