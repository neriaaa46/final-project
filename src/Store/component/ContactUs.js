import {Container,Button,Col,Row,Alert} from "react-bootstrap"
import validation from "../function/validation"
import "../css/recommendations.css"
import { useState } from "react"
import { useHistory } from "react-router"
import FirstName from "./inputsComponent/FirstName"
import LastName from "./inputsComponent/LastName"
import Email from "./inputsComponent/Email"
import Phone from "./inputsComponent/Phone"
import Subject from "./inputsComponent/Subject"
import TextBox from "./inputsComponent/TextBox"
import {contactUs} from "../Dal/api"


function ContactUs(){
    
    const history = useHistory()
    const [sentRequest, setSentRequest] = useState("")
    const [contactUsInputsDetails, setContactUsInputsDetails] = useState({
        firstName: {
            value: '', 
            name:"שם פרטי",
            inValid:false,
            appropriateError:"אותיות בלבד",
            errors: [], 
            validations: {
                required: true, 
                pattern: /^[a-z \u0590-\u05fe]+$/i
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
                pattern: /^[a-z \u0590-\u05fe]+$/i
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
            appropriateError:false,
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
            appropriateError:"לפחות 10 תווים חוקיים",
            errors:[], 
            validations:{
                required: true, 
                pattern:  /^[!-+:/,.? ^+-=0-9\a-z\u0590-\u05fe]{10,}$/i 
            }
        }
    })

    async function sendRequest(){
        let isValid = true
        const contactUsDetails = {}

       for (const key in contactUsInputsDetails) {

        contactUsDetails[key] = contactUsInputsDetails[key].value

        setContactUsInputsDetails(validation({value:contactUsInputsDetails[key].value, name:key},contactUsInputsDetails))
            if (contactUsInputsDetails[key].errors.length !==0){
                isValid = false
            }
        }
        if(isValid){ 

            const {status, message, inputValidation} = await contactUs(contactUsDetails)
            if(status === "ok"){
                setSentRequest(message)
                setTimeout(() => {
                    setSentRequest("")
                    history.push("/")
                }, 2000)

            } else if(inputValidation) {
                    setContactUsInputsDetails(inputValidation)    
            }
        }
    }


    return <>
    <Container>

        <h1>צור קשר</h1>

        <Row className="justify-content-center mt-5">
            <Col xs={12} md={8} lg={5}>
                <Container >
                        <Col className="input">
                            <FirstName setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                        </Col>
                        <Col  className="input">
                            <LastName setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                        </Col>
                        <Col  className="input">
                            <Email setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                        </Col>
                        <Col  className="input">
                            <Phone setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                        </Col>
                </Container>
            </Col>

            <Col xs={12} md={8} lg={5}>
                <Container>
                    <Col  className="input">
                        <Subject setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                    </Col>
                    <Col >
                        <TextBox setInputs={setContactUsInputsDetails} inputs={contactUsInputsDetails}/>
                    </Col>
                </Container>
                <Row className="alert justify-content-center">
                    {sentRequest &&<Alert className="alert-message" variant="dark">{sentRequest}</Alert>}
                </Row>
                <Container className="d-flex justify-content-center mb-3">
                    <Button className="col-6 col-md-6 mt-2" variant="light" onClick={()=>sendRequest()}>שלח פנייה</Button>
                </Container>
                
            </Col>
        </Row>
    </Container>
    </>
}

export default ContactUs