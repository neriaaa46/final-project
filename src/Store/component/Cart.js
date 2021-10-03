import { useEffect, useState } from "react"
import {Container,Button,Table} from "react-bootstrap"
import {useHistory} from "react-router-dom"
import "../css/index.css"
import ModalRegisterOrLogin from "./cartComponent/ModalRegisterOrLogin"
import ModalImages from "./cartComponent/ModalImages"
import {BsImages} from "react-icons/bs"
import {RiDeleteBin5Line} from "react-icons/ri"
import {pathImages} from "../Dal/api"




function Cart(props){

    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [showModalImages, setShowModalImages] = useState(false)
    const [arrayImages, setArrayImages] = useState([])

    const handleShow = () => {
        setShowModal(true);
    } 
    const handleClose = () => {
        setShowModal(false);
    } 

    const handleShowImages = () => {
        setShowModalImages(true);
    } 
    const handleCloseImages = () => {
        setShowModalImages(false);
    } 



    useEffect(()=>{
        if(localStorage.getItem("cart")){
            props.setCartProduct(JSON.parse(localStorage.getItem("cart")))
            props.setCartPrice(JSON.parse(localStorage.getItem("cart")).reduce((sum,item) => sum + Number(item.price),0))
            props.setNummberOfCartProducts(JSON.parse(localStorage.getItem("cart")).length)
        }
        
    },[])
 
    function deleteProduct(indexProductCart){
        let cart = JSON.parse(localStorage.getItem("cart"))
        cart = cart.filter((item, index) => index !== indexProductCart)
        localStorage.setItem("cart",JSON.stringify(cart))
        props.setCartProduct(cart)
        props.setNummberOfCartProducts(props.numOfCartProducts-1)
        props.setCartPrice(JSON.parse(localStorage.getItem("cart")).reduce((sum,item) => sum + Number(item.price),0))
    }


    function checkRegister(){
        if(props.isLogin){
            history.push("/orderCompletion")
        } else{
            handleShow()
        }
    }

    function showImages(product){
        setArrayImages([...product.imagesProduct])
        handleShowImages()
    }

    
return <>
    <Container className="mt-2">
    <h1>הסל שלי</h1>

    <ModalRegisterOrLogin handleClose={handleClose} showModal={showModal} setIsAdmin={props.setIsAdmin} setIsLogin={props.setIsLogin}/>
    <ModalImages handleCloseImages={handleCloseImages} showModalImages={showModalImages} arrayImages={arrayImages}/>
    <div className="order-summary text-center mb-4">
         {!!props.numOfCartProducts&&<div>
                <h3 className="mb-4">סיכום הזמנה:</h3>
                <h5 className="mb-2"> מחיר הזמנה כולל - {props.cartPrice} &#8362;</h5>
                <h5 className="mb-4">מספר מוצרים כולל - {props.numOfCartProducts}</h5>
                <Button variant="dark" className="ml-2" onClick={()=>checkRegister()}>בצע הזמנה</Button>
                <Button variant="dark" onClick={()=>props.clearCart()}>נקה את הסל</Button>
            </div>}
          {!props.numOfCartProducts&&<div>
                <h2>הסל ריק</h2>
            </div>}
    </div>

    {!!props.numOfCartProducts&& 
    <Table responsive="sm" striped bordered hover variant="dark" className="table-cart">
        <thead>
        <tr>
            <th>#</th>
            <th>פריט</th>
            <th>תמונה</th>
            <th>גודל</th>
            <th>מחיר</th>
            <th>תמונות</th>
            <th>הסר</th>
        </tr>
        </thead>
        <tbody>
            {props.cartProduct && props.cartProduct.map((item,index) => 
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item["name"]}</td>
                    <td><img src={`${pathImages}${item.image}`} className="cart-image"></img></td>
                    <td>{item["size"]}</td>
                    <td>{item["price"]} &#8362;</td>
                    <td>
                        <BsImages size={38} className="icon-card img-cart-table" onClick={()=>showImages(item)}></BsImages>
                    </td>
                    <td>
                        <RiDeleteBin5Line size ={42}  className="icon-card delete-cart-table" onClick={()=>deleteProduct(index)}>מחק מוצר</RiDeleteBin5Line>
                    </td>
                </tr>
            )}
        </tbody>
        </Table>}
  </Container>
    </>
}


export default Cart