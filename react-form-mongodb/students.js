const express = require('express');
const router = express.Router();
const Student = require('./studentModel');

router.post('/', async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.status(201).json(student);
    console.log(req.body)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;