import {Container,Button,Col,Row} from "react-bootstrap"
import validation from "../function/validation"
import {toRegister} from "../Dal/api"
import { useState } from "react"
import Email from "./inputsComponent/Email"
import Password from "./inputsComponent/Password"
import ConfirmPassword from "./inputsComponent/ConfirmPassword"
import FirstName from "./inputsComponent/FirstName"
import LastName from "./inputsComponent/LastName"


function Register(){

    const[isRegister,setIsRegister] = useState(false)
    const[errorMessage,setErrorMessage] = useState("")
    const [registerInputsDetails, setRegisterInputsDetails] = useState({
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
        password: {
            value: '',
            name:"סיסמא",
            inValid:false,
            appropriateError:"לפחות 6 תווים עם אות וספרה",
            errors:[], 
            validations:{
                required: true, 
                pattern: /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/ 
            }
        },
        confirmPassword: {
            value: '',
            name:"אימות סיסמא",
            inValid:false,
            appropriateError:"לפחות 6 תווים עם אות וספרה",
            errors:[], 
            validations:{
                required: true, 
                pattern: /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/  
            }
        }
    })

  
    async function register() {
        let isValid = true
        const user = {}

       for (const key in registerInputsDetails) {

            user[key] = registerInputsDetails[key].value

            setRegisterInputsDetails(validation({value:registerInputsDetails[key].value,name:key},registerInputsDetails))
            if (registerInputsDetails[key].errors.length !==0){
                isValid = false
            }
        }

        if(isValid){ 
            const {status,message,inputValidation} = await toRegister(user)
            if(status === "ok"){
                setIsRegister(true)
            } else {
                if(inputValidation){
                    setRegisterInputsDetails(inputValidation)
                } else {
                    setErrorMessage(message)
                    setTimeout(() => {
                        setErrorMessage("")
                    }, 1500)
                }
            }
        }
    }


    return <>
    <Container className="mt-2">
        <h1 className="header-logIn"> שלום, הרשם לאתר</h1>
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={10} lg={5}>
                <Container >
                        <Col className="input">
                            <FirstName setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                        </Col>
                        <Col className="input">
                            <LastName setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                        </Col>
                        <Col className="input">
                            <Email setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                            <small className="text-danger">{errorMessage}</small>
                        </Col>
                </Container>
            </Col>

            <Col xs={12} md={10} lg={5}>
                <Container>
                    <Col className="input">
                        <Password setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                    </Col>
                    <Col className="input">
                        <ConfirmPassword setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                    </Col>
                    <Col>
                        <Container className="d-flex justify-content-center mt-3 mb-4">
                            <Button className="col-7 col-md-8 col-lg-5"
                             variant="light"
                             onClick={()=>{register()}}>הרשם</Button>
                        </Container>
                    </Col>
                </Container>
            </Col>
        </Row>
    </Container>
</>
}

export default Register