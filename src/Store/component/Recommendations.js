import {Container,Button,Col,Row} from "react-bootstrap"
import TextBox from "./inputsComponent/TextBox"
import clearInputsDetails from "../function/clearInputsDetails"
import { useEffect } from "react"


function Recommendations(props){

    useEffect(() => {
        clearInputsDetails(props.inputsDetails)
    },[]);



    return <>
    <Container>
        <h1>המלצות שלנו :</h1>
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={8}>
                <div className="recommendations">
                                
                </div>
            </Col>
        </Row>
             <Row className="justify-content-center mt-5">
                 <Col xs={12} md={8}>
                    <TextBox setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
                </Col>
            </Row>

            <Container className="d-flex justify-content-center mt-2">
                    <Button className="col-10 col-md-3" variant="light">הוסף המלצה</Button>
            </Container>
              
    </Container>


    </>
}

export default Recommendations