import { useEffect } from "react"
import {Container,Button} from "react-bootstrap"
import clearInputsDetails from "../function/clearInputsDetails"
import {Link} from "react-router-dom"
import "../css/logIn.css"
import Email from "./inputsComponent/Email"
import Password from "./inputsComponent/Password"


function LogIn(props){

    useEffect(() => {
        clearInputsDetails(props.inputsDetails)
    },[]);
    


    return <>
        <Container className="mt-5">
        <h1 className="header-logIn"> שלום, התחבר לאתר :</h1>
            <Container className="col-11 col-md-6 mx-auto mt-5">
                <Email setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
            </Container>
            <Container className="col-11 col-md-6 mx-auto mt-4">
                <Password setDetailsinputs={props.setDetailsinputs} inputsDetails={props.inputsDetails}/>
            </Container>
            <Container className="d-flex justify-content-center align-items-end mt-5">
                <Button variant="light" className="col-4 col-md-2 ml-4" >התחבר</Button>
                <Link><p className="forget-password">שכחתי סיסמא</p></Link>
            </Container>
        </Container>
    </>
}

export default LogIn