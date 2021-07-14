import { useState } from "react"
import {Container,Button,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../css/logIn.css"
import { useHistory } from "react-router"
import validation from "../function/validation"
import {toLogin} from "../Dal/api"
import Email from "./inputsComponent/Email"
import Password from "./inputsComponent/Password"


function LogIn(props){

    const history = useHistory()

    const [errorMessage,setErrorMessage] = useState("")
    const [loginInputsDetails, setLoginInputsDetails] = useState({
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
        }  
    })


   async function loginUser(){
        let isValid = true
        const loginUserDetails = {}

       for (const key in loginInputsDetails) {

        loginUserDetails[key] = loginInputsDetails[key].value

            setLoginInputsDetails(validation({value:loginInputsDetails[key].value, name:key},loginInputsDetails))
            if (loginInputsDetails[key].errors.length !==0){
                isValid = false
            }
        }
        if(isValid){ 

            const {status, message, userDetails, inputValidation} = await toLogin(loginUserDetails)
            if(status === "ok"){
                props.setIsLogin(true)
                props.setIsAdmin(userDetails["admin"]?true:false)
                localStorage.setItem("user",JSON.stringify(userDetails))
                history.push(`${props.nextPath}`)
            } else {
                if(inputValidation){
                    setLoginInputsDetails(inputValidation)
                }   else{
                    setErrorMessage(message)
                    setTimeout(() => {
                        setErrorMessage("")
                    }, 1500);
                }
            }    
        }
    }


    return <>
        <Container className="mt-2">
            <h1 className="header-logIn">שלום, התחבר לאתר</h1>
            <Container className="justify-content-center mt-5">
                <Col className="col-12 col-md-9 col-lg-5 mx-auto input">
                    <Email setInputs={setLoginInputsDetails} inputs={loginInputsDetails}/>
                </Col>
                <Col className="col-12 col-md-9 col-lg-5 mx-auto input">
                    <Password setInputs={setLoginInputsDetails} inputs={loginInputsDetails}/>
                    <small className="text-danger">{errorMessage}</small>
                </Col>
                <Col className="d-flex justify-content-center align-items-end">
                    <Button variant="light" className="col-4 col-md-3 col-lg-2 ml-4"
                            onClick={()=>loginUser()}>התחבר</Button>
                    <Link><p className="forget-password">שכחתי סיסמא</p></Link>
                </Col>
            </Container>
        </Container>
    </>
}

export default LogIn