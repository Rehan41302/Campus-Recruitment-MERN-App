import React from 'react'
import {
    Row,
    Col,
    Button,
    Container,
    Table
} from 'react-bootstrap' ;
import axios from 'axios';


class AllStudent extends React.Component{

    constructor(props){
        super(props);
        this.onDelete=this.onDelete.bind(this);
        this.state={
            students:this.props.students
        }
    }

    onDelete=(id, index)=>{
        console.log('onDelete...')
        // const data:{userType:'student',id}
        axios.delete('/api/deleteUser/student',{data:{userType:'student',id}})
          .then(res=>{
              console.log('delete Hogya...',res)
              const students=this.state.students;
              students.splice(index, 1);
              this.setState({students})
          }).catch(err=>console.log('Delete ka Error',err.message))
    }

    render(){
     const {students}=this.state
        return(
         <div>
            <Container>
            <br/>
            <br/>
                <Row>
                    <Col></Col>
                    <Col><h1>All Student</h1></Col>
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
                    <th>Education</th>
                    <th>GPA</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                {students.map((data,i)=>{
                    console.log("students: ",data._id)
                    i+=1;
                    return(
                <tbody key={i}>
                    <tr>
                    <td>{i}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.education}</td>
                    <td>{data.cgpa}</td>
                    <td> <Button variant="danger" onClick={()=>this.onDelete(data._id,i-1)}>
                         Delete
                         </Button></td>
                    
                    </tr>
                   
                </tbody>)})}
             </Table>
            </Container>    
        </div>      
        )
    }
}

export default AllStudent