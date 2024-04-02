const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const uri = 'mongodb://localhost:27017/formdata';
const bodyParser = require('body-parser');
const studentsRouter = require('./students');


const app = express();
const port = 5000; // Choose any port you like
app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb://localhost:27017/formdata'; // Connection URI for your MongoDB database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/api/students', studentsRouter); 

app.get('/api/students', async (req, res) => {
    try {
      // Retrieve students data from MongoDB
      const students = await Student.find(); // Assuming you have a Student model defined
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});