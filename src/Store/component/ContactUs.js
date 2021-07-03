import {Container,Button,Col,Row} from "react-bootstrap"
import "../css/recommendations.css"
import { useState } from "react"
import FirstName from "./inputsComponent/FirstName"
import LastName from "./inputsComponent/LastName"
import Email from "./inputsComponent/Email"
import Phone from "./inputsComponent/Phone"
import Subject from "./inputsComponent/Subject"
import TextBox from "./inputsComponent/TextBox"



function ContactUs(){
    
    const [contactUsInputsDetails, setContactUsInputsDetails] = useState({
        firstName: {
            value: '', 
            name:"שם פרטי",
            inValid:false,
            appropriateError:"אותיות בלבד",
            errors: [], 
            validations: {
                required: true, 
                pattern: /^[a-z\u0590-\u05fe]+$/i
            }
        }, 
        lastName: {
            value: '',
            name:"שם משפחה",
            inValid:false,
            appropriateError:"אותיות בלבד",
            errors:[], 
            validations:{
                required: true, 
                pattern: /^[a-z\u0590-\u05fe]+$/i
            }
        },
        email: {
            value: '',
            name:"דואר אלקטרוני",
            inValid:false,
            appropriateError:"לא תקין", 
            errors:[], 
            validations:{
                required: true, 
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
                }
        },
        phone: {
            value: '',
            name:"טלפון",
            inValid:false,
            appropriateError:"ספרות בלבד ",
            errors:[], 
            validations:{
                required: true, 
                pattern: /[0-9]$/ 
            }
        },
        subject: {
            value: '',
            name:"נושא פנייה",
            inValid:false,
            appropriateError:"לפחות 10 תווים",
            errors:[], 
            validations:{
                required: true, 
                pattern: false
            }
        },
        text: {
            value: '',
            name:"טקסט",
            inValid:false,
            appropriateError:"לפחות 10 תווים",
            errors:[], 
            validations:{
                required: true, 
                pattern:  /^[a-z\u0590-\u05fe]{10,}$/i 
            }
        }
    })


    return <>
    <Container>

        <h1>צור קשר :</h1>

        <Row className="justify-content-center mt-3">
            <Col xs={12} md={5}>
                <Container >
                        <Col className="mt-4">
                            <FirstName setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                        </Col>
                        <Col className="mt-4">
                            <LastName setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                        </Col>
                        <Col className="mt-4">
                            <Email setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                        </Col>
                        <Col className="mt-4">
                            <Phone setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                        </Col>
                </Container>
            </Col>

            <Col xs={12} md={5}>
                <Container>
                    <Col className="mt-4">
                        <Subject setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                    </Col>
                    <Col className="mt-3">
                        <TextBox setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
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