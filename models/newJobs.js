const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const newJobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  }
});
module.exports = NewJob = mongoose.model("newjobs", newJobSchema);