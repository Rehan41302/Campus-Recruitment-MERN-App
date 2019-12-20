const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const studentsSchema = new Schema({
  // id: {
  //   type: String
  // },
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  cgpa: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  skills : {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = AllStudents = mongoose.model("students", studentsSchema);