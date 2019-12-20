import React from 'react'
import {
    Row,
    Col,
    Button,
    Container,
    Table
} from 'react-bootstrap' 


class AllCompany extends React.Component{
    constructor(props){
        super(props);
        // this.onDelete=this.onDelete.bind(this);
        this.state={
            companies:this.props.companies
        }
    }
    render(){
        const {companies}=this.state;
        return(
         <div>
            <Container>
            <br/>
            <br/>
                <Row>
                    <Col></Col>
                    <Col><h1>All Company</h1></Col>
                    <Col></Col>
                 </Row>   
            </Container>    
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
              <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>No Of Jobs</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                {companies.map((data,i)=>{
                    console.log("students: ",data._id)
                    i+=1;
                    return(
                <tbody key={i}>
                    <tr>
                    <td>{i}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>N/A</td>
                    <td><Button variant="danger">Delete</Button></td>
                    
                    </tr>
                   
                </tbody>)})}
             </Table>
            </Container>    
        </div>      
        )
    }
}

export default AllCompany