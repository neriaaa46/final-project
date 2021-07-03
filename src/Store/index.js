import "bootstrap/dist/css/bootstrap.min.css"
import "./css/index.css"
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


function App() { 

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


     function setNummberOfCartProducts(value){
        setNumOfCartProducts(value)
     }

    return (
        <Router>
            <NavBar isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLogin={isLogin} setIsLogin={setIsLogin} 
            numOfCartProducts={numOfCartProducts} setNummberOfCartProducts={setNummberOfCartProducts}/>

            <Switch>
                <Route exact path="/">
                <HomePage/>
                </Route>

                <Route exact path="/myProducts">
                <MyProducts/>
                </Route>

                <Route exact path="/cart">
                <Cart numOfCartProducts={numOfCartProducts} setNummberOfCartProducts={setNummberOfCartProducts}
                 isLogin={isLogin} setIsAdmin={setIsAdmin} setIsLogin={setIsLogin}/>
                </Route> 

                <Route exact path="/login">
                <LogIn setIsAdmin={setIsAdmin} setIsLogin={setIsLogin} nextPath="/" />
                </Route> 

                <Route exact path="/register">
                <Register/>
                </Route> 

                <Route exact path="/contactUs">
                <ContactUs/>
                </Route> 

                <Route exact path="/recommendations">
                <Recommendations isLogin={isLogin}/>
                </Route> 

                <Route exact path="/about">
                <About />
                </Route> 

                <Route exact path="/addproduct">
                <AddProduct />
                </Route> 

                <Route path="/product/:id">
                <Product numOfCartProducts={numOfCartProducts} setNummberOfCartProducts={setNummberOfCartProducts}/>
                </Route> 

                <Route exact path="/orderCompletion">
                <OrderCompletion/>
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

            </Switch>
        </Router>
  
)}

export default App