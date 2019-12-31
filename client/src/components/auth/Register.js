import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import {Form, Button } from 'react-bootstrap'
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      userType: "",      
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
  e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      userType: this.state.userType
    };
this.props.registerUser(newUser, this.props.history); 
  };
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            

            <Form  noValidate onSubmit={this.onSubmit}>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                  placeholder="Enter Name" />
                  <Form.Text className="text-muted">
                  {errors.name}
                  </Form.Text>
                 
                  
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                  placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Form.Text style={{color:'red'}}>
                  {errors.email}
                  </Form.Text>
                  
                </Form.Group>

                <Form.Group >
                  <Form.Label>Password</Form.Label>
                  <Form.Control  
                   onChange={this.onChange}
                   value={this.state.password}
                   error={errors.password}
                   autoComplete='new-password'                  
                   id="password"
                   type="password"
                   className={classnames("", {
                     invalid: errors.password
                   })}
                  placeholder="Password" />
                  <Form.Text style={{color:'red'}}>
                  {errors.password}
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control  
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    autoComplete='Confirm-password'
                    id="password2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2
                    })}
                  placeholder="Confirm- password" />
                </Form.Group>
                <Form.Text style={{color:'red'}}>
                {errors.password2}
                  </Form.Text>
                  <div className="input-field col s12" id="userType">
              <label htmlFor="">User Type:                   
              
                  <div className="custom-control custom-radio custom-control-inline">
                      <input 
                        onChange={()=>{this.setState({userType:'student'})}}                  
                        value='student'
                        type="radio" 
                        // className="custom-control-input"
                        className={classnames("custom-control-input", {
                          invalid: errors.userType
                        })}
                        id="student" 
                        name="userType"/>
                      <label className="custom-control-label" htmlFor="student">Student</label>
                      {/* <span className="red-text">{errors.userType}</span>                   */}
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                      <input 
                        onChange={()=>{this.setState({userType:'company'})}}                      
                        value='company'
                        type="radio" 
                        className={classnames("custom-control-input", {
                          invalid: errors.userType
                        })} 
                        id="company" 
                        name="userType"/>
                      <label className="custom-control-label" htmlFor="company">Company</label>
                  </div></label>
                  <br/><br/>
                  <span className="red-text">{errors.userType}</span>                  
                  
              </div> 
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button variant="primary" type="submit">
                Submit
              </Button>
                
              
              </div>
            
              
              </Form>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));