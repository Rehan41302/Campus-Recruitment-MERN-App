import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';
import { logoutUser } from "../../actions/authActions";
import Student from './Student/studentDash';
import Admin from './AdminD/AdminDashboard';
import Company from './Company/companyDash';
import{Button} from 'react-bootstrap'

class Dashboard extends Component {
  constructor(props){
    super(props);
  this.state={
    studentCall:true,
    companyCall: true,
    resume:null,
    user:{},
    allStudents:[]
  }
}

// companyFunction(){
//   axios.get('api/allStudents').then(res=>{
//     if(res){console.log("Dashboard,,,Students Aagae",res.data)
//    this.setState({
//      allStudents: res.data,
//      companyCall: false
//    })}else{
//     console.log("On Dashbord Comp,,,Students nhi aae jani... ")}
//   }).catch(err=>{console.log(err)})
// }

studentFunction(id){
      console.log(id)
      axios.post("/api/allStudents",id).then(response=>{
        if(response.data){
         this.setState({resume:response.data,studentCall:false})
          console.log('On Dashboard Component: ',response.data.name)
        }else{
          this.setState({resume:0})
        console.log("On Dashbord Comp,,,data nhi mila")}
      }).catch(err=>console.log(err))
}
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  studentPortal=(e)=>{
    // e.preventDefault();
    this.setState({
      studentCall: true,
      
    })
    console.log("PONKAAA", this.state.studentCall);
    
    // <Student details={this.props.auth.user}/>
   
  }
render() {
    const { user } = this.props.auth;
    // this.setState({user})
    console.log("Dashboard: ",user)
    if(user.userType==='student' && this.state.studentCall){
      const id={
        id:user.id
      }
      this.studentFunction(id)
    }
    // else if(user.userType==='company' && this.state.companyCall){
    //   this.companyFunction();
    // }   
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        {/* {(user.userType==='student')
        ?
        // this.studentFunction(user.id)
        <Student details={this.props.auth.user} resume={this.state.resume}/>
        :( */}
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            
            <Button variant="primary"style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </Button>
            <br/>
         {(user.userType==='admin')?
            
            <Admin details={user} />
         
         :(user.userType==='student')?
           // this.studentFunction(user.id)
           <Student details={user} resume={this.state.resume}/>

         :(user.userType==='company')?
              
           <Company details={user}/>
           
         :( 
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.studentPortal}
              className="btn btn-large waves-effect waves-light hoverable blue "
            >
              Student
            </button>
           )}
          </div>
        </div> 
      </div>
      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);