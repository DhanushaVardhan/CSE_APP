const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  admissionNo: String,
  email: String,
  phoneNumber: String,
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;