import {Container,Button,Col,Row} from "react-bootstrap"
import { useState } from "react"
import validation from "../function/validation"
import Email from "./inputsComponent/Email"
import Password from "./inputsComponent/Password"
import ConfirmPassword from "./inputsComponent/ConfirmPassword"
import FirstName from "./inputsComponent/FirstName"
import LastName from "./inputsComponent/LastName"
import {UpdateDetailsUserDal, isNotExist} from "../Dal/api"

function UpdateDetails(){

    const[userExist,setUserExist] = useState(false)
    const [updateInputsDetails, setUpdateInputsDetails] = useState({
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
            try{
                const notExist = await isNotExist(updateInputsDetails["email"].value)
                 setUserExist(notExist)
                 UpdateDetailsUserDal(user)
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
    <Container className="mt-5">
        <h1 className="header-logIn">עדכן פרטים :</h1>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={5}>
                <Container >
                        <Col className="mt-5">
                            <FirstName setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                        </Col>
                        <Col className="mt-5">
                            <LastName setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                        </Col>
                        <Col className="mt-5">
                            <Email setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                            {userExist&&<small className="text-danger">אימייל זה קיים במערכת !</small>}
                        </Col>
                </Container>
            </Col>

            <Col xs={12} md={5}>
                <Container>
                    <Col className="mt-5">
                        <Password setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                    </Col>
                    <Col className="mt-5">
                        <ConfirmPassword setInputs={setUpdateInputsDetails} inputs={updateInputsDetails}/>
                    </Col>
                    <Col className="mt-5">
                        <Container className="d-flex justify-content-center mt-5">
                            <Button className="col-12 col-md-6 mt-3" variant="light" onClick={()=>updateDetailsUser()}>עדכן פרטים</Button>
                        </Container>
                    </Col>
                </Container>
            </Col>
        </Row>
    </Container>
</>
}


export default UpdateDetails