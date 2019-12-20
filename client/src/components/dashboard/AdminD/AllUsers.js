import React from 'react'
import {
    Row,
    Col,
    Button,
    Container,
    Table,
    Modal
} from 'react-bootstrap';
import axios from 'axios'; 


class AllUsers extends React.Component{
    constructor(props){
        super(props);
        this.onDelete=this.onDelete.bind(this);        
        this.state={
            users:this.props.users,
            addModalShow: false,
            modalDataId:null,
            modalDataIndex:null

        }
    }

    onDelete(id, index){
        // const data={id:id}
        axios.delete('/api/deleteUser',{data:{userType:'student',id}})
          .then(res=>{
              console.log('delete req: ',res)
              const users=this.state.users; 
              users.splice(index, 1);
              this.setState({
                  users: users,
                  addModalShow: false,
                })
          })
    }
    render(){
        const {users} = this.props;
        let addModalClose =() => this.setState({
            addModalShow: false
        })
        return(
         <div>
            <Container>
            <br/>
            <br/>
                <Row>
                    
                    <Col className="text-center"><h1>All Users</h1></Col>
                    
                 </Row>   
            </Container>    
            <br/>
            <br/>
            
            <Container>
              <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Type</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                {users.map((data, i)=>{
                    i+=1;
                return(
                <tbody key={i}>
                    <tr>
                    <td>{i}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.userType}</td>
                    <td><Button variant="danger" 
                                onClick={()=>this.setState({
                                        modalDataId: data._id,
                                        modalDataIndex: i-1,
                                        addModalShow: true
                               })}>Delete</Button></td>
                    
                    </tr>
                </tbody>)})}
             </Table>
            </Container>    
            <Container>
                <Modal
                        show ={this.state.addModalShow}
                        onHide={()=>addModalClose(false)}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        >
                        <Modal.Header closeButton >
                            <Modal.Title id="contained-modal-title-vcenter" >
                               Delete 
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to delete?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=>addModalClose(false)}>Close</Button>
                            <Button variant="danger" onClick={()=>this.onDelete(this.state.modalDataId,this.state.modalDataIndex)}>Delete</Button>                        
                        </Modal.Footer>
                    </Modal>
            </Container>
        </div>      
        )
    }
}

export default AllUsers