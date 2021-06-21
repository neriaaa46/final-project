import {Container,Button,Col,Row} from "react-bootstrap"
import "../css/recommendations.css"
import { useEffect } from "react"
import clearInputsDetails from "../function/clearInputsDetails"
import FirstName from "./inputsComponent/FirstName"
import LastName from "./inputsComponent/LastName"
import Email from "./inputsComponent/Email"
import Phone from "./inputsComponent/Phone"
import Subject from "./inputsComponent/Subject"
import TextBox from "./inputsComponent/TextBox"



function ContactUs(props){

    useEffect(() => {
        clearInputsDetails(props.inputsDetails)
    },[]);


    return <>
    <Container>

        <h1>צור קשר :</h1>

        <Row className="justify-content-center mt-3">
            <Col xs={12} md={5}>
                <Container >
                        <Col className="mt-4">
                            <FirstName setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                        </Col>
                        <Col className="mt-4">
                            <LastName setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                        </Col>
                        <Col className="mt-4">
                            <Email setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                        </Col>
                        <Col className="mt-4">
                            <Phone setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                        </Col>
                </Container>
            </Col>

            <Col xs={12} md={5}>
                <Container>
                    <Col className="mt-4">
                        <Subject setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                    </Col>
                    <Col className="mt-3">
                        <TextBox setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                    </Col>
                </Container>
               
                <Container className="d-flex justify-content-center mt-5">
                    <Button className="col-10 col-md-6 mb-5" variant="light">שלח פנייה</Button>
                </Container>
                
            </Col>
        </Row>
    </Container>
    </>
}

export default ContactUs