import {Container,Button,Col,Row} from "react-bootstrap"
import validation from "../function/validation"
import { addUserToDal, isNotExist} from "../Dal/api"
import { useState } from "react"
import Email from "./inputsComponent/Email"
import Password from "./inputsComponent/Password"
import ConfirmPassword from "./inputsComponent/ConfirmPassword"
import FirstName from "./inputsComponent/FirstName"
import LastName from "./inputsComponent/LastName"


function Register(){

    const[userExist,setUserExist] = useState(false)
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
            try{
               const notExist = await isNotExist(registerInputsDetails["email"].value)
                setUserExist(notExist)
                addUserToDal(user)
            }
            catch{
                setUserExist(true)
                setTimeout(() => {
                    setUserExist(false)
                }, 1500);
            }
        }     
    }


    return <>
    <Container className="mt-2">
        <h1 className="header-logIn"> שלום, הרשם לאתר :</h1>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={10} lg={5}>
                <Container >
                        <Col className="mt-5">
                            <FirstName setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                        </Col>
                        <Col className="mt-5">
                            <LastName setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                        </Col>
                        <Col className="mt-5">
                            <Email setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                            {userExist&&<small className="text-danger">אימייל זה קיים במערכת !</small>}
                        </Col>
                </Container>
            </Col>

            <Col xs={12} md={10} lg={5}>
                <Container>
                    <Col className="mt-5">
                        <Password setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                    </Col>
                    <Col className="mt-5">
                        <ConfirmPassword setInputs={setRegisterInputsDetails} inputs={registerInputsDetails}/>
                    </Col>
                    <Col className="mt-5">
                        <Container className="d-flex justify-content-center mt-5">
                            <Button className="col-12 col-md-6 mt-3"
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