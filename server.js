const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const cors = require('cors');
const TeachersRoute = require('./app/routes/teachersRoute');
const dbConnect = require('./app/db/dbconnect')


// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());

// Add middlewares for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/teacher', TeachersRoute);

app.listen(port).on('listening', () => {
  console.log('🚀 are live on ' + port);
});

