import {Container,Button,Col,Row,Alert} from "react-bootstrap"
import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import validation from "../function/validation"
import Email from "./inputsComponent/Email"
import Password from "./inputsComponent/Password"
import ConfirmPassword from "./inputsComponent/ConfirmPassword"
import FirstName from "./inputsComponent/FirstName"
import LastName from "./inputsComponent/LastName"
import {toUpdate} from "../Dal/api"

function UpdateDetails(){

    const history = useHistory()

    const[isUpdate,setIsUpadate] = useState("")
    const[errorMessage,setErrorMessage] = useState("")
    const [updateInputsDetails, setUpdateInputsDetails] = useState({
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
        password: {
            value: '',
            name:"סיסמא",
            inValid:false,
            appropriateError:"לפחות 6 תווים עם אות (אנגלית) וספרה",
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
            appropriateError:"לפחות 6 תווים עם אות (אנגלית) וספרה",
            errors:[], 
            validations:{
                required: true, 
                pattern: /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/  
            }
        }
       
    })

    useEffect(()=>{
        if(localStorage.getItem("user")){
          const {firstName, lastName, email} = JSON.parse(localStorage.getItem("user"))
          updateInputsDetails.firstName.value = firstName
          updateInputsDetails.lastName.value = lastName
          updateInputsDetails.email.value = email
          setUpdateInputsDetails({...updateInputsDetails})
        } else {
            history.push("/")
        }
    },[])


    async function updateDetailsUser(){
        let isValid = true
        const user = {}

       for (const key in updateInputsDetails) {

            user[key] = updateInputsDetails[key].value

            setUpdateInputsDetails(validation({value:updateInputsDetails[key].value,name:key},updateInputsDetails))
            if (updateInputsDetails[key].errors.length !==0){
                isValid = false
            }
        }

        if(isValid){ 
            
            const {id, email} = JSON.parse(localStorage.getItem("user"))
            const {status, message, inputValidation} = await toUpdate(user, id, email)
            if(status === "ok"){
                setIsUpadate(message)
                setTimeout(() => {
                    setIsUpadate("")
                }, 2000)
            } else {
                if(inputValidation){
                    setUpdateInputsDetails(inputValidation)
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
        <h1 className="header-logIn">עדכן פרטים</h1>
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={5}>
                <Container >
                        <Col className="input">
                            <FirstName setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                        </Col>
                        <Col className="input">
                            <LastName setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                        </Col>
                        <Col className="input">
                            <Email setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                            <small className="text-danger">{errorMessage}</small>
                        </Col>
                </Container>
            </Col>

            <Col xs={12} md={5}>
                <Container>
                    <Col className="input">
                        <Password setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                    </Col>
                    <Col className="input">
                        <ConfirmPassword setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                    </Col>
                    <Row className="alert justify-content-center">
                        {isUpdate&&<Alert className="alert-message" variant="dark">{isUpdate}</Alert>}
                    </Row>
                    <Col>
                        <Container className="d-flex justify-content-center mb-4">
                            <Button className="col-7 col-md-8 col-lg-5" 
                            variant="light" 
                            onClick={()=>updateDetailsUser()}>עדכן פרטים</Button>
                        </Container>
                    </Col>
                </Container>
            </Col>
        </Row>
    </Container>
</>
}


export default UpdateDetails