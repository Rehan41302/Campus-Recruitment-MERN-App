import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    Accordion,
    Tooltip,
    OverlayTrigger,
    Button
} from 'react-bootstrap'


export default  class AllVacancies extends React.Component{

    constructor(props){
        super(props)
        this.state={
            vacancies:this.props.details,
            error: this.props.error

        }
    }
example = () =>{
    this.setState({
        vacancies:this.props.details

    })}

date= (data) =>{
    console.log('date= ',data)
 var myDate = data.split('-');
 var months=['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
     var currMonth=myDate[1];
     var a=myDate[2].split();
     var day= `${a[0].charAt(0)}${a[0].charAt(1)}`;
     var year=myDate[0];
     var month=months[currMonth-1]
 return(`${month} ${day}, ${year}`) 
}
    

    render(){
        console.log('Allvacancies Rendered...')
        // this.setState({
        //     vacancies:this.props.details
        // })
        return(
            <div>
                   <Container>     
                  <Row>
                      <Col>
                     <h3 className="bg-primary hh">Vicancies</h3>
                     {(!this.state.vacancies)? <h4 style={{textAlign:'center'}}>No Data Avilable</h4> 
                     :(
                     this.state.vacancies.map((data, index)=>{
                        return(    
                    <Accordion defaultActiveKey={index}>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <b>{index}- </b>
                                {data.title}                                   
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="card"> 
                                    <h4>
                                    {data.company}
                                    </h4>
                                    <h5 className="text-info">Job Description</h5>
                                           {data.desc}
                                                <br/>
                                             {/* <i className="fa fa-envelope-o" aria-hidden="true">{data.email}</i> */}
                                           {/* {data.email} */}
                                                <br/>
                                                <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Post On!</Tooltip>}>
                                                    <span className="d-inline-block">
                                                        <i className="fa fa-calendar-o" aria-hidden="true" disabled style={{ pointerEvents: 'none' }}>
                                                            <span></span> {this.date(data.date)}
                                                        </i>
                                                    </span>
                                                    </OverlayTrigger>
                                                    </td>
                                                    <td>

                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Offer Salary</Tooltip>}>
                                                    <span className="d-inline-block">
                                                        <i className="fa fa-money" aria-hidden="true" disabled style={{ pointerEvents: 'none' }}>
                                                                {data.salary}
                                                             <span></span> 
                                                        </i>
                                                    </span>
                                                    </OverlayTrigger>
                                                    </td>
                                                    <td>

                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Experince</Tooltip>}>
                                                    <span className="d-inline-block">
                                                        <i className="fa fa-envelope-o" aria-hidden="true" disabled style={{ pointerEvents: 'none' }}>
                                                                  {data.email}
                                                            <span></span> 
                                                        </i>
                                                    </span>
                                                    </OverlayTrigger>
                                                    </td>
                                                    </tr>
                                                    </tbody>
                                                    </table>
                                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            {/* <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                vicances2
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card> */}
                    </Accordion>)}))}
                    
                    </Col> 
                  </Row>   
                  </Container>     
                   
            </div>

        )
    }
}