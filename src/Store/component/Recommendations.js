import {Container,Button,Col,Row} from "react-bootstrap"
import { useState,useEffect } from "react"
import {MdDelete} from "react-icons/md"
import validation from "../function/validation"
import {addRecommendation, getUsersRecommendations, deleteRecommendation} from "../Dal/api"
import TextBox from "./inputsComponent/TextBox"

function Recommendations(props){

    const [recommendations, setReommendations]=useState([])
    const [recommendationsInputsDetails, setRecommendationsInputsDetails] = useState({
        text: {
            value: '',
            name:"טקסט",
            inValid:false,
            appropriateError:"לפחות 10 תווים חוקיים",
            errors:[], 
            validations:{
                required: true, 
                pattern:  /^[!-+:/,? ^+=-a-z\u0590-\u05fe]{10,}$/i 
            }
        }
    })

    useEffect(()=>{
        getRecommendations()
    },[])


    async function getRecommendations(){
        try{
            const allRecommendations = await getUsersRecommendations()
            setReommendations([...allRecommendations])
        }
        catch(error){
            console.log(error.message)
        }
    }

    async function remove(recommendationId){
        const userDetails = JSON.parse(localStorage.getItem("user"))
        const {status, message} = await deleteRecommendation(userDetails, recommendationId)
        if(status){
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
            if(inputValidation){
                setRecommendationsInputsDetails(inputValidation)
            }
        }

    }

    return <>
    <Container className="mt-2">
        <h1>המלצות שלנו</h1>

        <Row className="justify-content-center mt-5">
            <Col xs={12} md={10} lg={8} className="recommendations">
                <ul>
                    {recommendations.map((recommendation,index)=>
                    <li key={index} className="mb-3">
                         {recommendation.firstName} {recommendation.lastName} - {recommendation.text}
                         {!!props.isAdmin&&<MdDelete onClick={()=>remove(recommendation.recommendationId)} className="mr-2 icon-card"/>}
                    </li>)}  
                </ul>
            </Col>
        </Row>
       {!props.isLogin&&<Row className="justify-content-center mt-3">
            <Col xs={12} md={9} lg ={7}>
                <TextBox setInputs={setRecommendationsInputsDetails} inputs={recommendationsInputsDetails}/>
            </Col>
        </Row>}

        {!props.isLogin&&<Container className="d-flex justify-content-center mt-5 mb-3">
                <Button className="col-7 col-md-3 col-lg-2" variant="light" onClick={()=>{addNewRecommendation()}}>הוסף המלצה</Button>
        </Container>} 
    </Container>
    </>
}

export default Recommendations