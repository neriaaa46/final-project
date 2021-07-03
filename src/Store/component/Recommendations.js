import {Container,Button,Col,Row} from "react-bootstrap"
import validation from "../function/validation"
import {addRecommendation, getUsersRecommendations} from "../Dal/api"
import TextBox from "./inputsComponent/TextBox"
import { useState,useEffect } from "react"


function Recommendations(props){

    const [recommendations, setReommendations]=useState([])
    const [recommendationsInputsDetails, setRecommendationsInputsDetails] = useState({
        text: {
            value: '',
            name:"טקסט",
            inValid:false,
            appropriateError:"לפחות 10 תווים",
            errors:[], 
            validations:{
                required: true, 
                pattern:  /^[a-z\u0590-\u05fe]{10,}$/i 
            }
        }
    })

    useEffect(()=>{
        getRecommendations()
    },[])

    async function getRecommendations(){
        try{
            const allRecommendations = await getUsersRecommendations()
            console.log(allRecommendations);
            setReommendations([...allRecommendations])
        }
        catch{

        }
    }

    function addNewRecommendation(){
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
            const {id,firstName,lastName} = JSON.parse(localStorage.getItem("user"))
            addRecommendation({user:{id,firstName,lastName},...newRecommendation})
        }

    }

    return <>
    <Container className="mt-2">
        <h1>המלצות שלנו :</h1>

        <Row className="justify-content-center mt-5">
            <Col xs={12} md={8}>
                <ul className="recommendations">
                    {recommendations.map(recommendation=>
                    <li className="mb-2">
                    {recommendation.user.firstName} {recommendation.user.lastName} - {recommendation.text}
                    </li>)}     
                </ul>
            </Col>
        </Row>
       {props.isLogin&&<Row className="justify-content-center mt-5">
            <Col xs={12} md={8}>
                <TextBox setInputs={setRecommendationsInputsDetails} inputs={recommendationsInputsDetails}/>
            </Col>
        </Row>}

        {props.isLogin&&<Container className="d-flex justify-content-center mt-2">
                <Button className="col-10 col-md-3" variant="light" onClick={()=>{addNewRecommendation()}}>הוסף המלצה</Button>
        </Container>}
              
    </Container>
    </>
}

export default Recommendations