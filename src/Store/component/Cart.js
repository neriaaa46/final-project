import { useEffect, useState } from "react"
import {Container,Button,Table} from "react-bootstrap"
import {Link, useHistory} from "react-router-dom"
import "../css/product.css"
import ModalRegisterOrLogin from "./cartComponent/ModalRegisterOrLogin"



function Cart(props){

    const [cartProduct, setCartProduct] = useState([]) 
    const [CartPrice, setCartPrice] = useState(0)
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)

    const handleShow = () => {
        setShowModal(true);
    } 
    const handleClose = () => {
        setShowModal(false);
    } 



    useEffect(()=>{
        if(localStorage.getItem("cart")){
            setCartProduct(JSON.parse(localStorage.getItem("cart")))
            setCartPrice(JSON.parse(localStorage.getItem("cart")).reduce((sum,item) => sum + Number(item.price),0))
            props.setNummberOfCartProducts(JSON.parse(localStorage.getItem("cart")).length)
        }
    },[])
 
    function deleteProduct(indexProductCart){
        let cart = JSON.parse(localStorage.getItem("cart"))
        cart = cart.filter((item,index) => index !== indexProductCart)
        localStorage.setItem("cart",JSON.stringify(cart))
        setCartProduct(cart)
        props.setNummberOfCartProducts(props.numOfCartProducts-1)
        setCartPrice(JSON.parse(localStorage.getItem("cart")).reduce((sum,item) => sum + Number(item.price),0))
    }

    function clearCart(){
        localStorage.removeItem("cart")
        setCartProduct([])
        setCartPrice(0)
        props.setNummberOfCartProducts(0)
    }

    function checkRegister(){
        if(props.isLogin){
            history.push("/orderCompletion")
        } else{
            handleShow()
        }
    }

    
return <>
    <Container className="mt-2">
    <h1>הסל שלי :</h1>

    <ModalRegisterOrLogin handleClose={handleClose} showModal={showModal} setIsAdmin={props.setIsAdmin} setIsLogin={props.setIsLogin}/>

    <div className="order-summary text-center mb-4">
         {!!props.numOfCartProducts&&<div>
                <h3 className="mb-4">סיכום הזמנה:</h3>
                <h5 className="mb-2"> מחיר הזמנה כולל - {CartPrice} &#8362;</h5>
                <h5 className="mb-4">מספר מוצרים כולל - {props.numOfCartProducts}</h5>
                <Button variant="light" className="ml-5" onClick={()=>checkRegister()}>בצע הזמנה</Button>
                <Button variant="light" onClick={()=>clearCart()}>נקה את הסל</Button>
            </div>}
          {!props.numOfCartProducts&&<div>
                <h2>הסל ריק</h2>
            </div>}
    </div>

    {!!props.numOfCartProducts&&
    <Table responsive="sm" className="card-product mb-4" >
            <thead>
            <tr>
                <th>#</th>
                <th>פריט</th>
                <th>תמונה</th>
                <th>גודל</th>
                <th>מחיר</th>
                <th>עריכה</th>
            </tr>
            </thead>
            <tbody>
                {cartProduct && cartProduct.map((item,index) => 
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item["name"]}</td>
                        <td><img src={item["image"]} style={{width:"100px"}}></img></td>
                        <td>{item["size"]}</td>
                        <td>{item["price"]} &#8362;</td>
                        <td className="d-flex flex-column">
                            <Link to="/product"><Button className="btn-table mb-4" variant="light">ערוך מוצר</Button></Link>
                            <Button variant="light" className="btn-table" onClick={()=>deleteProduct(index)}>מחק מוצר</Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>}
  </Container>
    </>
}

export default Cart