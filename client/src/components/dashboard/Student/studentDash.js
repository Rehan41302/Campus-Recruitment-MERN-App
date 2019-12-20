import React from 'react'
import './dashboard.css'
// import ''
import {Container,
        Form,
        Button, 
        Row, 
        Col, 
        Card, 
        Table,
        Spinner
} from 'react-bootstrap';
import img from './Koala.jpg';
// import img_avatar from './img_avatar.png'
import axios from 'axios';
import { resolve } from 'dns';
import AllVacancies from '../AllVacancies'


class Student extends React.Component{

    

    constructor(props){
        super(props);
        // this.onChangecgpa = this.onChangecgpa.bind(this)
        // this.onChangeskills = this.onChangeskills.bind(this)
        // this.onChangeexperience = this.onChangeexperience.bind(this)
        // this.onChangeeducation = this.onChangeeducation.bind(this)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);                        

        this.state = {
        open: false,
        AllVacanciesCall: false,
        vacancies: null,
        isValid: "",
        email:this.props.details.email, 
        education:"",
        cgpa:"",
        skills:"",
        experience:"",
        email2:"",
        name:this.props.details.name,
        id:this.props.details.id,
        resume: this.props.resume,
        jobError:null
        }
        this.togglePanel = this.togglePanel.bind(this);
        }
        togglePanel(e){
        this.setState({open: !this.state.open})
        }
        
        componentWillMount(){
            console.log("WillMount", this.props.resume);
        }

        componentDidMount(){
            axios.get("/api/allJobs").then(response=>{
            const vacancies =   response.data
            console.log('DidMount: ',vacancies)
            // console.log('VACANCY Date: ',vacancies)
            this.setState({
                vacancies:vacancies
            });     
            }).catch(err=>{console.log(err)
             
                this.setState({
                    jobError:err.response.data
                })

            })
            
            
        }
        Vacancies=()=>{
            this.setState({
                AllVacanciesCall: true
            })
            // console.log(this.state.vacancies)
        }

        onChange = e => {
            this.setState({ [e.target.name]: e.target.value }, () => {
                console.log('this state', this.state)});
          };    
        onSubmit(e){
            e.preventDefault();
            const {education,skills,cgpa,experience,email2}=this.state        
            if(!education || !skills || !cgpa || !experience || !email2){
                         this.setState({
                             isValid:'Fields are empty'
                         })
                        }

            const currentResume = {
                education: this.state.education,
                skills:this.state.skills,
                cgpa:this.state.cgpa,
                name:this.state.name,
                id:this.state.id,
                email:this.state.email2,
                experience:this.state.experience
            }
            axios.post('/api/student/resume',currentResume)
                  .then(res=> console.log('Resume Saved...',res.data)).catch(err=>console.log('Resume error: ',err.response.data));
                  this.setState({
                    resume: currentResume,  
                    education:"",
                    skills:"",
                    cgpa:"",
                    email2:"",
                    experience:""
                  })
        }
  

      
    render(){
        console.log('Student Dash Resume',this.props.resume);
        
        if(this.props.resume){
            
        return((this.state.AllVacanciesCall)?<AllVacancies details={this.state.vacancies} error={this.state.jobError}  />:(
           <div>
               <Container>
                   <Row>
                       <Col></Col>
                       <Col></Col>
                       <Col></Col>
                       <Col></Col>
                       <Col></Col>
                       <Col></Col>
                       <Col></Col>
                       <Col>
                        <Button className=" bg-primary" disabled={!this.state.vacancies}  onClick={this.Vacancies}>
                           Vacancies
                        </Button>
                       </Col>
                       </Row>
               </Container>
             
             <br/>
             <br/>
                      
             <Container>
                <Row>
                    <Col className="ct">
                    <Table  className="borderless responsive"  >
                            <thead> 
                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Education</th>
                                <th>CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{this.state.name}</td>
                                <td>{this.props.resume.email}</td>
                                <td>{this.props.resume.education}</td>
                                <td>{this.props.resume.cgpa}</td>
                                </tr>
                            </tbody>
                            </Table>
                    </Col>
                   

                </Row>   
              </Container>   
              <br/>
              <a href="/Koala.jpg" download>
  <img src={img} alt="Koala" width="104" height="142"/>
</a>

                  <br/>
                  <br/>                 
  </div>))}
  else if(this.props.resume==0){
      return(
     
              <Container>
                  <Row>
                      <Col>
                      {/* <div>
                    {this.state.open ? ( */}
                     <div className='content'>
                        {this.props.children}        
                    <Card border="primary">
                        <Card.Header className="text-center bg-primary header">Current Semester Information</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            {/* <Card.Text> */}
                            <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                    
                                    <Row>
                                        <Col>

                                        <Form.Control 
                                        name="education" 
                                        placeholder="Education"
                                        required='required' 
                                        value={this.state.education} 
                                        onChange={this.onChange} />
                                        </Col>
                                        <Col>
                                        <Form.Control 
                                        name="cgpa" 
                                        placeholder="CGPA"
                                        required='required'
                                        value={this.state.cgpa} 
                                        onChange={this.onChange} />
                                        </Col>
                                    </Row>
                                    </Form.Group>

                                    <br/>
                            <Form.Group controlId="formBasicEmail">
                                    
                                    <Row>
                                        <Col>
                                        <Form.Control 
                                        name="skills" 
                                        placeholder="Skills"
                                        required='required'
                                        value={this.state.skills} 
                                        onChange={this.onChange} />
                                        </Col>
                                        <Col>
                                        <Form.Control 
                                        name="experience" 
                                        placeholder="Experience"
                                        required='required'
                                        value={this.state.experience} 
                                        onChange={this.onChange} />
                                        </Col>
                                    </Row>
                                    </Form.Group>
                                    
                                    <br/>
                                    <Form.Group controlId="formBasicEmail">

                                    <Row>
                                       <Col>
                                        <Form.Control 
                                        name="email2"
                                        placeholder="Email"
                                        required='required'
                                        value={this.state.email2} 
                                        onChange={this.onChange} />
                                        </Col>
                                    </Row>
                                    </Form.Group>
                                    <br/>
                                   
                            <Button variant="primary" type="submit" >Submit</Button>
                            <p>{this.state.isValid}</p>
                            </Form>
                        
                        </Card.Body>
                        </Card>

                         </div>
                            {/* //    ) : null} */}
                        {/* </div> */}
                      </Col>
                  </Row>    
              </Container>    
                            
        );
    }
    else{
        return(
            <div style={{marginTop:'200px', textAlign:'center'}}>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
           </div>
        )
    }
    }
}

export default Student;