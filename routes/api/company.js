const express = require("express");
const router = express.Router();

const NewJob = require("../../models/newJobs");
const AllStudents = require("../../models/allStudents");
// const User= require("../../models/user");

router.get("/", (req, res)=>{
   AllStudents.find().then(user=>{
       if(!user){
           res.status(400).json({Err: "No Student Available"});
       }else{
           res.json(user); 
       }
   }).catch(err => console.log(err));
 })

router.post("/addJob", (req, res)=>{
    const {title, company, salary, desc, email}= req.body;
   const addJob = new NewJob({
    title, 
    company,
    salary, 
    desc, 
    email
   });
   addJob.save().then(data=>{res.json(data)}).catch(err => console.log(err.message)); 
}) 
 

module.exports = router;

 