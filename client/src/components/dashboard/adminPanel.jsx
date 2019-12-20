import React,{ Component } from 'react'
import axios from 'axios';
 




export const Students=()=>{
    axios.get("/api/allStudents").then(response=>{
        if(response.data){
         this.setState({resume:response.data,studentCall:false})
          console.log('On Dashboard Component: ',response.data.name)
        }else{
        console.log("On Dashbord Comp,,,data nhi mila")}
      }).catch(err=>console.log(err))

}