import {Container,Row,Button, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import { useEffect } from "react"
import clearInputsDetails from "../function/clearInputsDetails"
import Address from "./inputsComponent/Address"
import Zip from "./inputsComponent/Zip"
import Phone from "./inputsComponent/Phone"



function OrderCompletion(props){

    
    useEffect(() => {
        clearInputsDetails(props.inputsDetails)
    },[]);

    
    return <>
    <Container>
        <h1>סיום הזמנה :</h1>
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={7} className="mt-3">
                <Address setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
            </Col>
            <Col xs={12} md={7}  className="mt-3">
                <Zip setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
            </Col>
            <Col xs={12} md={7}  className="mt-3">
                <Phone setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
            </Col>
        </Row>
        <Row className="justify-content-center mt-5">
            <Button variant="light" className="ml-3">סיים הזמנה</Button>
            <Link to="/cart"><Button variant="light">ערוך הזמנה</Button></Link>
        </Row>
    </Container>
    
    </>
}

export default OrderCompletion