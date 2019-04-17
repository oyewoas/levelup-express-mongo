const TeachersModel = require('../models/teachersModel');
const bcrypt = require('bcrypt');


const index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

const create_teacher = async (req, res) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
  
      const teacher = await TeachersModel.create(req.body);
  
      res.status(200).json({
        status: 'success',
        data: teacher,
      });
    } catch (err) {
      console.log(err);
  
      res.status(500).json({
        status: 'error',
        message: 'An error occured while creating your account 😭',
      });
    }
  };
  



module.exports = {
    index,
    create_teacher
};