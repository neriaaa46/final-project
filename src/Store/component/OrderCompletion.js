import {Container,Row,Button, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
import validation from "../function/validation"
import {sendOrder} from "../Dal/api"
import Address from "./inputsComponent/Address"
import Zip from "./inputsComponent/Zip"
import Phone from "./inputsComponent/Phone"
import ModalMessage from "./ModalMessage"
import {getLastUserAddress, sendEmail} from "../Dal/api"



function OrderCompletion(props){


    const [smShow, setSmShow] = useState(false);
    const [textModal, setTextModal] = useState("");
    const [numOrder, setNumOrder] = useState("");
    const [headerModal, setHeaderModal] = useState("");
    const [orderCompletionInputsDetails, setOrderCompletionInputsDetails] = useState({
        address: {
            value: '',
            name:"כתובת",
            inValid:false,
            appropriateError:"",
            errors:[], 
            validations:{
                required: true, 
                pattern: false 
            }
        },
        zip: {
            value: '',
            name:"מיקוד",
            inValid:false,
            appropriateError:"",
            errors:[], 
            validations:{
                required: true, 
                pattern: /^[0-9]*$/
            }
        },
        phone: {
            value: '',
            name:"טלפון",
            inValid:false,
            appropriateError:"ספרות בלבד ",
            errors:[], 
            validations:{
                required: true, 
                pattern: /[0-9]$/ 
            }
        }
        
    })

    useEffect(async()=>{
        const userId = JSON.parse(localStorage.getItem("user")).id
        try{
            const userDetails = await getLastUserAddress(userId)
            for (const key in orderCompletionInputsDetails) {
                orderCompletionInputsDetails[key].value = userDetails[key]
            }
            setOrderCompletionInputsDetails({...orderCompletionInputsDetails})
        }
        catch(error){
            console.log(error.message)
        }
        
    },[])


    async function sendNewOrder(){
        let isValid = true
        const orderCompletionDetails = {}

       for (const key in orderCompletionInputsDetails) {

        orderCompletionDetails[key] = orderCompletionInputsDetails[key].value

        setOrderCompletionInputsDetails(validation({value:orderCompletionInputsDetails[key].value,name:key},orderCompletionInputsDetails))
            if (orderCompletionInputsDetails[key].errors.length !==0){
                isValid = false
            }
        }

        if(isValid){ 

            const cart =  JSON.parse(localStorage.getItem("cart"))
            const products = cart.map(product => {
                return {productId: product.productId, images: product.imagesProduct}
            })

            const totalPrice = cart.reduce((sum,item) => sum + Number(item.price),0)
            const {id:userId} = JSON.parse(localStorage.getItem("user"))

            const {status, message, inputValidation, orderId} = await sendOrder(orderCompletionDetails, userId, totalPrice, products)
            if(status === "ok"){
                setHeaderModal("ההזמנה בוצעה בהצלחה")
                setNumOrder(`הזמנה מספר: ${orderId}`)
                const cart = JSON.parse(localStorage.getItem("cart"))
                const user = JSON.parse(localStorage.getItem("user"))
                props.clearCart()
                const {statusMail, message} = await sendEmail(user, cart)
                if(statusMail==="ok"){
                    setTextModal(message)
                }
                setSmShow(true)

            } else{
                
                if(inputValidation){
                    setOrderCompletionInputsDetails(inputValidation)
                } else{
                    console.log(message)
                }
            }
        }
    }

    return <>
    <Container>
        <ModalMessage smShow ={smShow} setSmShow={setSmShow} textModal={textModal} headerModal={headerModal} numOrder={numOrder}/>

        <h1>סיום הזמנה</h1>
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={7} className="mt-3">
                <Address setInputs={setOrderCompletionInputsDetails} inputs={orderCompletionInputsDetails} address={orderCompletionInputsDetails.address.value}/>
            </Col>
            <Col xs={12} md={7}  className="mt-3">
                <Zip setInputs={setOrderCompletionInputsDetails} inputs={orderCompletionInputsDetails} zip={orderCompletionInputsDetails.zip.value}/>
            </Col>
            <Col xs={12} md={7}  className="mt-3">
                <Phone setInputs={setOrderCompletionInputsDetails} inputs={orderCompletionInputsDetails} phone={orderCompletionInputsDetails.phone.value}/>
            </Col>
        </Row>
        <Row className="justify-content-center mt-5">
            <Button variant="light" className="ml-3" onClick={()=>{sendNewOrder()}}>סיים הזמנה</Button>
            <Link to="/cart"><Button variant="light">ערוך הזמנה</Button></Link>
        </Row>
    </Container>
    
    </>
}

export default OrderCompletion