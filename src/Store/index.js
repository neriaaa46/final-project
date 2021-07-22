import "bootstrap/dist/css/bootstrap.min.css"
import "./css/index.css"
import {Container} from "react-bootstrap"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "./component/NavBar"
import HomePage from "./component/HomePage"
import MyProducts from "./component/MyProducts"
import LogIn from "./component/LogIn"
import Register from "./component/Register"
import Cart from "./component/Cart"
import ContactUs from "./component/ContactUs"
import Recommendations from "./component/Recommendations"
import About from "./component/About"
import AddProduct from "./component/AddProduct"
import Product from "./component/Product"
import OrderCompletion from "./component/OrderCompletion"
import OrderHistory from "./component/OrderHistory"
import UpdateDetails from "./component/UpdateDetails"
import OrdersReceived from "./component/OrdersReceived"
import EditProduct from "./component/EditProduct"

function App() { 

    const [cartProduct, setCartProduct] = useState([]) 
    const [cartPrice, setCartPrice] = useState(0)
    const [isLogin,setIsLogin] = useState(false)
    const [isAdmin,setIsAdmin] = useState(false)
    const [numOfCartProducts, setNumOfCartProducts] = useState(0)
  
   
    useEffect(()=>{

        if(localStorage.getItem("cart")){
            setNummberOfCartProducts(JSON.parse(localStorage.getItem("cart")).length)
        }

        if(localStorage.getItem("user")){
            const user = JSON.parse(localStorage.getItem("user"))
            setIsAdmin(user["admin"])
            setIsLogin(true)
        }
    },[])

    function clearCart(){
        localStorage.removeItem("cart")
        setCartProduct([])
        setCartPrice(0)
        setNummberOfCartProducts(0)
    }


     function setNummberOfCartProducts(value){
        setNumOfCartProducts(value)
     }


    return (
        <Router>
            <NavBar isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLogin={isLogin} setIsLogin={setIsLogin} 
            numOfCartProducts={numOfCartProducts} setNummberOfCartProducts={setNummberOfCartProducts}/>
            <Switch>
            <Container className="py-5">

                <Route exact path="/">
                <HomePage/>
                </Route>

                <Route exact path="/myProducts">
                <MyProducts isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
                </Route>

                <Route exact path="/cart">
                <Cart numOfCartProducts={numOfCartProducts} setNummberOfCartProducts={setNummberOfCartProducts}
                 isLogin={isLogin} setIsAdmin={setIsAdmin} setIsLogin={setIsLogin} clearCart={clearCart}
                 cartProduct={cartProduct} setCartProduct={setCartProduct} cartPrice={cartPrice} setCartPrice={setCartPrice}/>
                </Route> 

                <Route exact path="/login">
                <LogIn setIsAdmin={setIsAdmin} setIsLogin={setIsLogin} nextPath="/"/>
                </Route> 

                <Route exact path="/register">
                <Register/>
                </Route> 

                <Route exact path="/contactUs">
                <ContactUs/>
                </Route> 

                <Route exact path="/recommendations">
                <Recommendations isAdmin={isAdmin} isLogin={isLogin} setIsAdmin={setIsAdmin}/>
                </Route> 

                <Route exact path="/about">
                <About/>
                </Route> 

                <Route exact path="/addproduct">
                <AddProduct/>
                </Route> 

                <Route exact path="/editProduct/:productId">
                <EditProduct/>
                </Route> 

                <Route path="/product/:id">
                <Product numOfCartProducts={numOfCartProducts} setNummberOfCartProducts={setNummberOfCartProducts} isAdmin = {isAdmin}/>
                </Route> 

                <Route exact path="/orderCompletion">
                <OrderCompletion clearCart={clearCart}/>
                </Route> 

                <Route exact path="/orderHistory">
                <OrderHistory/>
                </Route> 

                <Route exact path="/updateDetails">
                <UpdateDetails/>
                </Route> 

                <Route exact path="/ordersReceived">
                <OrdersReceived/>
                </Route> 
                </Container>
            </Switch>
        </Router>
  
)}

export default App