import {Container,Row,Table,Modal,Card,ListGroup,Col} from "react-bootstrap"
import {pathOrdersDataBase} from "../../Dal/api"
import {whichClassStatus} from "../../function/utils"

function ModalOrdersDetails(props){

    

    return <>
    <Container>
        <Modal size="lg" closeButton show={props.showModal} onHide={props.handleClose}>
            <Container className="modal-register-login">
                <Modal.Header closeButton>
                    <Container>
                    <h1>פרטי הזמנה : </h1>
                    </Container>
                </Modal.Header>
                <Modal.Body>

                        <Row className="justify-content-around"> 
                            <Col xs={12} lg={4}>
                                <h6>מספר הזמנה : {props.order.orderId}</h6>
                            </Col>
                            <Col  xs={12} lg={4}>
                                <h6>תאריך : {props.order.date.slice(0,10)}</h6>
                            </Col>
                            <Col  xs={12} lg={4}>
                                <h6>סטאטוס : {whichClassStatus(props.statusClassName)}</h6>
                            </Col>
                        </Row>
                        
                        <h4 className="mt-3 mb-3 mr-4">פרטים אישיים :</h4>
                        <Row className="justify-content-center">
                            <Card style={{ width: '20rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>שם פרטי: {props.order.firstName}</ListGroup.Item>
                                    <ListGroup.Item>שם משפחה: {props.order.lastName}</ListGroup.Item>
                                    <ListGroup.Item>אימייל: {props.order.email}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                            <Card style={{ width: '20rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>כתובת: {props.order.address}</ListGroup.Item>
                                    <ListGroup.Item>מיקוד: {props.order.zip}</ListGroup.Item>
                                    <ListGroup.Item>טלפון: {props.order.phone}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Row>

                        <h4 className="mt-3 mb-3 mr-4">מוצרים :</h4>
                            <Row className="justify-content-center mb-3">
                            <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>מספר</th>
                                <th>שם</th>
                                <th>גודל</th>
                                <th>קישור לתמונות</th>
                                </tr>
                            </thead>
                            {props.order.products.map((product,index) =>
                            <tbody>
                                <tr>
                                <td>{index+1}</td>
                                <td>{product.name}</td>
                                <td>{product.size}</td>
                                <td>{product.images.map((image, index)=>{
                                    return <a key={index} target="_blank" href={`${pathOrdersDataBase}${image}`}>img{index+1} </a>
                                })}</td>
                                </tr>
                            </tbody>)}
                            </Table>
                        </Row>
                </Modal.Body>
            </Container>
        </Modal>
    </Container>
    </>
}

export default ModalOrdersDetails


