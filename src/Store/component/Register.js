import {Container,Button,Col,Row} from "react-bootstrap"
import { useEffect } from "react"
import clearInputsDetails from "../function/clearInputsDetails"
import Email from "./inputsComponent/Email"
import Password from "./inputsComponent/Password"
import ConfirmPassword from "./inputsComponent/ConfirmPassword"
import FirstName from "./inputsComponent/FirstName"
import LastName from "./inputsComponent/LastName"


function Register(props){

    useEffect(() => {
        clearInputsDetails(props.inputsDetails)
    },[]);

    return <>
    <Container className="mt-5">
        <h1 className="header-logIn"> שלום, הרשם לאתר :</h1>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={5}>
                <Container >
                        <Col className="mt-5">
                            <FirstName setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                        </Col>
                        <Col className="mt-5">
                            <LastName setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                        </Col>
                        <Col className="mt-5">
                            <Email setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                        </Col>
                </Container>
            </Col>

            <Col xs={12} md={5}>
                <Container>
                    <Col className="mt-5">
                        <Password setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                    </Col>
                    <Col className="mt-5">
                        <ConfirmPassword setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                    </Col>
                    <Col className="mt-5">
                        <Container className="d-flex justify-content-center mt-5">
                            <Button className="col-12 col-md-6 mt-3" variant="light">הרשם</Button>
                        </Container>
                    </Col>
                </Container>
            </Col>
        </Row>
    </Container>
</>
}

export default Register