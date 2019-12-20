const express = require("express");
const router = express.Router();

const AllStudents = require("../../models/allStudents");

router.post("/resume", (req, res)=>{
    const {name, id, email, education, cgpa, skills,experience}= req.body;

    AllStudents.findOne({email: email}).then((user)=>{
    if(user){
        res.status(400).json('Data Already Exists, you Cant edit')
    }
    
        const newStudent = new AllStudents({
            _id: id,
            name,
            email,
            education,
            cgpa,
            skills,
            experience
        })
    
    newStudent.save().then(user=>res.json({message:"Saved Successfully",user})).catch(err => {console.log(err); res.status(400).json(err)});
    
    }).catch(err => console.log(err));;
 
})    

module.exports = router;
