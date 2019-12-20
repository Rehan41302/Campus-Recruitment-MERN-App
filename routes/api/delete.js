const express = require("express");
const router = express.Router();

const User = require('../../models/User');
const AllStudents = require('../../models/allStudents');
const NewJob = require('../../models/newJobs');

var UserData;

router.delete('/', (req, res) => {
    // const {email} = req.body
    const {id}  = req.body;
    const { userType } = req.body;

    if(userType==='student'){UserData=AllStudents}
     else if(userType==='company'){UserData=NewJob}
    console.log(req.body,"For delete")
      // console.log(req.params.id,"id ")
      User.findByIdAndDelete(id)
        .then(user =>{
          if(!user){res.status(404).json({message:'user not exists'})}
          UserData.findByIdAndDelete(id)
            .then(user =>{
          // if(!user){res.json({message:'user not exists in student database'})}              
              res.json({ message:'user data has been Removed.',success: true,userType })
            })
            .catch(err => res.status(404).json({ success: false,Error: err.message }))
                        
        }).catch(err => res.status(404).json({ success: false,Error: err.message }));  
    
})

router.delete('/student', (req, res)=>{
  const {id} = req.body;
  AllStudents.findByIdAndDelete(id)
  .then(user => res.json({ message:'user data has been Removed.',success: true }))
              
  .catch(err => res.status(404).json({ success: false,Error: err.message }))
})

 
  module.exports = router;
    