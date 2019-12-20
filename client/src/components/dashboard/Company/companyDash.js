import React, { useState } from 'react'
import {
    Row,
    Col,
    Button,
    Container,
    Accordion,
    Card,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form
} from 'react-bootstrap' 
import C_Dashboard from './C_Dashboard.css';
import axios from 'axios'


class Company extends React.Component{
  
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     this.state = {
         addModalShow: false,
         students: [],
         isValid: '',
         stdCheck: false,
         stdError: false,         
         title: "",
         company: "",
         salary: "",
         desc: "",
         email: ""
     }
    }
      UNSAFE_componentWillMount(){
        axios.get('api/allStudents').then(res=>{
            if(res){console.log("Dashboard,,,Students Aagae",res.data);
            
           this.setState({
             students: res.data,
             stdCheck: true
            //  companyCall: false
           })}else{
            console.log("On Dashbord Comp,,,Students nhi aae jani... ")}
          }).catch(err=>{console.log(err.message)
            this.setState({
                stdError:true
            })
        })
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value}, () => {
                console.log('this state', this.state)});
        // const {title,company,salary,desc,email}=this.state
        //         if(!title || !company || !salary || !desc || !email){
        //             this.setState({
        //                 isValid:false
        //             })
        //         }
              }
    
   
    onSubmit(e){
        e.preventDefault();
        const {title,company,salary,desc,email}=this.state        
        if(!title || !company || !salary || !desc || !email){
                     this.setState({
                         isValid:'Fields are empty'
                     })
                    }
        const jobData = {
            title: this.state.title,
            company: this.state.company,
            salary: this.state.salary,
            desc: this.state.desc,
            email: this.state.email
        }
        axios.post('/api/company/addJob',jobData)
              .then(res=>{ console.log('Job Added...',res.data);
              this.setState({
                title: "",
                company: "",
                salary: "",
                desc: "",
                email: "",
                addModalShow: false
              })}
            ).catch(err=>console.log('resume error: ',err.message));
    }

    render(){
        console.log('company dash',this.state.students);
        let addModalClose =() => this.setState({
            addModalShow: false
        })
        return(
           <div>
              <Container>
                  <br/>
                  <Row>
                      <Col></Col>
                      <Col></Col>
                      <Col >
                          <Button className="bg-primary b1" onClick={()=> this.setState({addModalShow: true})}>Post a Job</Button>
                      </Col>
                  </Row>
               </Container>
               <br/>    
               <br/>
               <br/>
               <Container>
               <Row>
                      
                      <Col></Col>
                      <Col xs="8">
                     <h3 className="bg-primary text-center h3">Student Information</h3>
                     
                     {(this.state.stdCheck===false && this.state.stdError==null)
                        ?<h4>Loading...</h4>
                        :(this.state.stdError==true)
                            ?<h4 style={{textAlign:'center'}}>SORRY, NO DATA AVAILABLE</h4>
                         :( 
                    <Accordion defaultActiveKey='0'>
                            {this.state.students.map((data, index)=>{
                        return( 
                            <Card key={index}>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                   <h4>{index}- {data.name} </h4>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index}>
                                    <Card.Body className="card"> 
                                     <h5 className="text-primary">Profile</h5>
                                        <br/>
                                        <table className="table table-hover">
                                            <tbody>
                                            <tr>
                                                <td> Email</td>
                                                <td>{data.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Education</td>
                                                <td>{data.education}</td>
                                            </tr>
                                            <tr>
                                                <td> CGPA</td>
                                                <td>{data.cgpa}</td>
                                            </tr>
                                            <tr>
                                                <td> Skill</td>
                                                <td>{data.skills}</td>
                                            </tr>
                                            <tr>
                                                <td>Experience</td>
                                                <td>{data.experience}</td>
                                            </tr>
                                            </tbody>
                                        </table>    
                                      </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                          )}
                        )}
                  </Accordion>
                        )}  
                    </Col> 
                    <Col></Col>
                  </Row>    
               </Container>    
               <br/>

               <Container>
               <Modal
                    show ={this.state.addModalShow}
                    onHide={()=>addModalClose(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton className="modl">
                        <Modal.Title id="contained-modal-title-vcenter" >
                         <h2 className="t1">   Add Description About Job </h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={this.onSubmit}>  
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Title" 
                            required='required'
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange} 
                             />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Company Name"
                            required='required'
                            name="company" 
                            value={this.state.company}
                            onChange={this.onChange} 
                             />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Email"
                            required='required'
                            name="email" 
                            value={this.state.email}
                            onChange={this.onChange}  
                             />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Experience Require</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Expereince Require"
                            required='required'
                            value={this.state.experience}
                            onChange={this.onChange} 
                             />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Offered Salary"
                            required='required'
                            name="salary" 
                            value={this.state.salary}
                            onChange={this.onChange}  
                             />
                        </Form.Group>     
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description of Job</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows="3"
                            required='required'
                            name="desc"
                            value={this.state.desc}
                            onChange={this.onChange} 
                             />
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Label for="example-number-input" className="col-2 col-form-label">Number</Form.Label>
                             <Form.Control className="form-control" type="number"  id="example-number-input"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                        <p>{this.state.isValid}</p>
                </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={()=>addModalClose(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>    
               </Container>   
           </div>
           
        )
    }
}

export default Company