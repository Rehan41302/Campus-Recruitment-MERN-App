import React from 'react'
import {
    Row,
    Col,
    Button,
    Container,
    Card,
    CardDeck,
    Spinner
} from 'react-bootstrap' 
import './Admin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllUsers from './AllUsers';
import AllStudent from './AllStudent';
import AllCompany from './AllCompany';
import axios from 'axios'



class Admin extends React.Component{

    constructor(props) {
        super(props);
        // this.allusers = this.allusers.bind(this)
        // this.allcompany = this.allcompany.bind(this)
        // this.allstudent = this.allstudent.bind(this)
    
        this.state={
            userClick:false,
            stdClick:false,
            comClick:false,
            users: [],
            compLen: 0,
            stdLen: 0,
            students: [],
            companies: [],
            error:null,
            loading:true,
            stdButton: true
            
        }

    };

    componentDidMount(){
        axios.get('api/allStudents').then(res=>{
            if(res){console.log("Admin,,,Students Aagae",res.data)
           this.setState({
             students: res.data,
             stdButton:false
           })}else{
            console.log("On Dashbord Comp,,,Students nhi aae jani... ")}
          }).catch(err=>{console.log(err.message)});


    }

    componentWillMount(){
        axios.get('api/users').then(res=>{
            console.log("AdminDash: Users Aagae",res.data);
            var companies=0;var students=0;
             const comp=this.state.companies;
             const users=this.state.users;
                for(var i=0; i<(res.data).length;i++ ){
                    // console.log("Currten ki type", res.data[i].userType)
                    var resType=res.data[i].userType
                    
                    if(resType!=='admin'){
                        users.push(res.data[i])
                    }
                    if(resType==='student'){students+=1}
                    else if(resType==='company'){
                        companies+=1
                        comp.push(res.data[i])

                    }
             }
             console.log('compniesss: ',comp);
                
                
           this.setState({
             users: users,
             compLen: companies,
             stdLen: students,
             companies: comp,
             loading:false
            //  companyCall: false
           })
    }).catch(err=>{console.log(err.response.data);
        this.setState({
            loading:false,
            error:err.response.data
        })})
    }

    render(){
        if(this.state.userClick){return <AllUsers users={this.state.users}/>}
        else if(this.state.stdClick){return <AllStudent students={this.state.students}/>}
        else if(this.state.comClick){return <AllCompany companies={this.state.companies}/>}
        // console.log('Date: ',new Date())
        
        return(
            <div>
                <Container>
                <br/>
                <br/>
                    <Row>
                        <Col></Col>
                        <Col><h1>WellCome Admin</h1></Col>
                        <Col></Col>
                     </Row>   
                </Container>    
                <br/>
                <br/>
                <br/>
                <br/>
                
                <React.Fragment>
                <Container>
                 <CardDeck>
                    <Card>
                         <Card.Header className="crd">
                         <Button disabled={this.state.loading}  block size='lg' onClick={()=>{this.setState({userClick:true})}} >
                          All User 
                          </Button>
                         </Card.Header>
                        <Card.Body>
                        <Card.Title className="ct"><i className="fa fa-user" aria-hidden="true"></i>No Of Users</Card.Title>
                        <Card.Text className="text-center ctx">
                        {(this.state.loading)?<Spinner animation="grow" variant="primary" />
                             : this.state.users.length
                            }
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="crd">
                        <Button disabled={this.state.stdButton}  size="lg" block onClick={()=>{this.setState({stdClick:true})}}>
                          Students
                          </Button>
                        </Card.Header>
                        <Card.Body>
                        <Card.Title className="ct" ><i className="fa fa-graduation" aria-hidden="true"></i>No Of Students</Card.Title>
                        <Card.Text className="text-center ctx">
                        {(this.state.loading)?<Spinner animation="grow" variant="primary" />
                           :this.state.stdLen
                        }                               
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="crd">
                        <Button disabled={this.state.loading}  size="lg" block onClick={()=>{this.setState({comClick:true})}}>
                          Companies
                          </Button>
                        </Card.Header>
                        <Card.Body>
                        <Card.Title className="ct" >No Of Companies</Card.Title>
                        <Card.Text className="text-center ctx">
                        {(this.state.loading)?<Spinner animation="grow" variant="primary" />                           
                          :this.state.compLen
                          }
                               
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                </Container>
                </React.Fragment>    
            </div>    
        )
    }
}
export default Admin