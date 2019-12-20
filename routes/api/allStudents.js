const express = require("express");
const router = express.Router();

const AllStudents = require("../../models/allStudents");

router.get("/", (req, res)=>{
   AllStudents.find().then(user=>{
       if(!user){
           res.status(400).json("No Student Available");
       }else{
           res.json(user); 
       }
   }).catch(err => console.log(err));
 })

 router.post("/", (req, res)=>{
    const {id}=req.body
    AllStudents.findById(id).then(user=>{
        
            res.json(user); 
        
    })
 })

 module.exports = router;
 