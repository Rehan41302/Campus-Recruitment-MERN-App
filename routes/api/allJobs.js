const express = require("express");
const router = express.Router();

const NewJob = require("../../models/newJobs");

router.get("/", (req, res)=>{
    console.log('/allJObs Called...')
    NewJob.find()
    .then(data => {
    if(!data){res.status(404).json('No Data Availavle')}
    else   res.json(data);
      })
    .catch(err => console.log("All Jobs err from NewJob", err.message))
    });

    module.exports = router;
    