import { useState } from "react"
import {Container,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../css/logIn.css"
import { useHistory } from "react-router"
import validation from "../function/validation"
import {isUserExist} from "../Dal/api"
import Email from "./inputsComponent/Email"
import Password from "./inputsComponent/Password"


function LogIn(props){

    const history = useHistory()

    const [successfullyLogin,setSuccessfullyLogin] = useState(true)
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


   async function logInUser(){
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
           try{
               const user = await isUserExist(loginUserDetails)
                setSuccessfullyLogin(true)
                props.setIsLogin(true)
                props.setIsAdmin(user["admin"])
                localStorage.setItem("user",JSON.stringify(user))
                history.push(`${props.nextPath}`)
            }
            catch{
                setSuccessfullyLogin(false)
                setTimeout(() => {
                    setSuccessfullyLogin(true)
                }, 1500);
                props.setIsLogin(false)
            }
        }
    }


    return <>
        <Container className="mt-2">
            <h1 className="header-logIn"> שלום, התחבר לאתר :</h1>
            <Container className="col-12 col-md-9 col-lg-6 mx-auto mt-5">
                <Email setInputs={setLoginInputsDetails} inputs={loginInputsDetails}/>
            </Container>
            <Container className="col-12 col-md-9 col-lg-6 mx-auto mt-4">
                <Password setInputs={setLoginInputsDetails} inputs={loginInputsDetails}/>
                {!successfullyLogin&&<small className="text-danger">אימייל או סיסמא אינם תקינים</small>}
            </Container>
            <Container className="d-flex justify-content-center align-items-end mt-5">
                <Button variant="light" className="col-4 col-md-3 col-lg-2 ml-4"
                        onClick={()=>logInUser()}>התחבר</Button>
                <Link><p className="forget-password">שכחתי סיסמא</p></Link>
            </Container>
        </Container>
    </>
}

export default LogIn