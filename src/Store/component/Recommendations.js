import {Container,Button,Col,Row, Alert} from "react-bootstrap"
import { useState,useEffect } from "react"
import {MdDelete} from "react-icons/md"
import {FcApprove} from "react-icons/fc"
import {FcDisapprove} from "react-icons/fc"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import validation from "../function/validation"
import {addRecommendation, getUsersRecommendations, deleteRecommendation, changeActiveRecommendation} from "../Dal/api"
import TextBox from "./inputsComponent/TextBox"

function Recommendations(props){


    const [isAdded, setIsAdded]=useState("")
    const [activeRecommendations, setActiveRecommendations]=useState([])
    const [notActiveRecommendations, setNotActiveRecommendations]=useState([])
    const [recommendationsInputsDetails, setRecommendationsInputsDetails] = useState({
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

    useEffect(()=>{
        getRecommendations()
    },[])


    async function getRecommendations(){
        try{
            let isAdmin = false
            if(localStorage.getItem("user")){
                const {admin} = JSON.parse(localStorage.getItem("user"))
                isAdmin = admin
            }
            const allRecommendations = await getUsersRecommendations(isAdmin)
            const active = allRecommendations.filter((recommendation) => recommendation.active === 1)
            const notActive = allRecommendations.filter((recommendation) => recommendation.active === 0)
            setActiveRecommendations(active)
            setNotActiveRecommendations(notActive)
        }
        catch(error){
            console.log(error.message)
        }
    }

    async function remove(recommendationId){
        const userDetails = JSON.parse(localStorage.getItem("user"))
        const {status, message} = await deleteRecommendation(userDetails, recommendationId)
        if(status==="ok"){
            getRecommendations()
        }
    }

    async function changeActive(recommendationId, active) {
        const {status} = await changeActiveRecommendation(recommendationId, active)
       if(status==="ok"){
        getRecommendations()
       }
    }

    async function addNewRecommendation(){
        let isValid = true
        const newRecommendation = {}

       for (const key in recommendationsInputsDetails) {

            newRecommendation[key] = recommendationsInputsDetails[key].value

            setRecommendationsInputsDetails(validation({value:recommendationsInputsDetails[key].value,name:key},recommendationsInputsDetails))
            if (recommendationsInputsDetails[key].errors.length !==0){
                isValid = false
            }
        }

        if(isValid){ 
            const {id} = JSON.parse(localStorage.getItem("user"))
            const {status, message, inputValidation} = await addRecommendation(newRecommendation, id)
            if(status==="ok"){
                setIsAdded(message)
                setTimeout(() => {
                    setIsAdded("")
                }, 2000)
            }   else if(inputValidation){
                setRecommendationsInputsDetails(inputValidation)
            }
        }

    }

    return <>
    <Container className="mt-2">
        <h1>המלצות שלנו</h1>

       {(notActiveRecommendations.length!==0)&&props.isAdmin&&<Row className="justify-content-center mt-5">
            <Col xs={12} md={10} lg={8} className="recommendations">
                <ul className="list-rec">
                    {props.isAdmin&&<h4 className="mb-4">ממתין לאישור :</h4>}
                    {notActiveRecommendations.map((recommendation,index)=>
                    <li key={index} className="mb-3">
                         <FontAwesomeIcon icon={faStar} size={"md"} className="star ml-3"/>{' '}
                         {recommendation.firstName} {recommendation.lastName} - {recommendation.text}
                         {!!props.isAdmin&&<MdDelete size={20} onClick={()=>remove(recommendation.recommendationId)} className="mr-2 icon-card"/>}
                         {!!props.isAdmin&&<FcApprove size={25} onClick={()=>changeActive(recommendation.recommendationId, true)} className="mr-2 icon-card"/>}
                    </li>)}  
                </ul>
            </Col>
        </Row>}
        {(activeRecommendations.length!==0)&&<Row className="justify-content-center mt-5">
            <Col xs={12} md={10} lg={8} className="recommendations">
                <ul className="list-rec">
                {!!props.isAdmin&&<h4 className="mb-4">מאושר :</h4>}
                    {activeRecommendations.map((recommendation,index)=>
                    <li key={index} className="mb-3">
                         <FontAwesomeIcon icon={faStar} size={"md"} className="star ml-3"/>{' '}
                         {recommendation.firstName} {recommendation.lastName} - {recommendation.text}
                         {!!props.isAdmin&&<MdDelete size={20} onClick={()=>remove(recommendation.recommendationId)} className="mr-2 icon-card"/>}
                         {!!props.isAdmin&&<FcDisapprove size={25} onClick={()=>changeActive(recommendation.recommendationId, false)} className="mr-2 icon-card"/>}
                    </li>)}  
                </ul>
            </Col>
        </Row>}
       {!props.isAdmin&&props.isLogin&&<Row className="justify-content-center mt-3">
            <Col xs={12} md={9} lg ={7}>
                <TextBox setInputs={setRecommendationsInputsDetails} inputs={recommendationsInputsDetails}/>
            </Col>
        </Row>}
        <Row className="alert justify-content-center">
            {isAdded&&<Alert className="alert-message" variant="dark">{isAdded}</Alert>}
        </Row>

        {!props.isAdmin&&props.isLogin&&<Container className="d-flex justify-content-center mb-3">
                <Button className="col-7 col-md-3 col-lg-2" variant="light" onClick={()=>{addNewRecommendation()}}>הוסף המלצה</Button>
        </Container>} 
    </Container>
    </>
}

export default Recommendations