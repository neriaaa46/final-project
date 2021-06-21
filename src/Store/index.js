import "bootstrap/dist/css/bootstrap.min.css"
import "./css/index.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Navbar,NavDropdown,Nav,Badge} from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
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

    const [inputsDetails, setInputsDetails] = useState({
        firstName: {
            value: '', 
            name:"שם פרטי",
            inValid:false,
            appropriateError:"אותיות בלבד",
            errors: [], 
            validations: {
                required: true, 
                pattern: /^[a-z\u0590-\u05fe]+$/i
            }
        }, 
        lastName: {
            value: '',
            name:"שם משפחה",
            inValid:false,
            appropriateError:"אותיות בלבד",
            errors:[], 
            validations:{
                required: true, 
                pattern: /^[a-z\u0590-\u05fe]+$/i
            }
        },
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
        },
        confirmPassword: {
            value: '',
            name:"אימות סיסמא",
            inValid:false,
            appropriateError:"לפחות 6 תווים עם אות וספרה",
            errors:[], 
            validations:{
                required: true, 
                pattern: /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/  
            }
        },
        subject: {
            value: '',
            name:"נושא פנייה",
            inValid:false,
            appropriateError:"לפחות 10 תווים",
            errors:[], 
            validations:{
                required: true, 
                pattern: false
            }
        },
        textArea: {
            value: '',
            name:"טקסט",
            inValid:false,
            appropriateError:"לפחות 10 תווים",
            errors:[], 
            validations:{
                required: true, 
                pattern:  /^[a-z\u0590-\u05fe]{10,}$/i 
            }
        },
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
        }

    })

    function setDetailsinputs(value){
        setInputsDetails(value)
    }



    return (
    
    <Router>

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown.Item href="/about">אודות</NavDropdown.Item>
                    <NavDropdown.Item href="/contactUs">צור קשר</NavDropdown.Item>
                    <NavDropdown.Item href="/recommendations">המלצות</NavDropdown.Item>
                    <NavDropdown.Item href="/addproduct">הוסף</NavDropdown.Item>
                    <NavDropdown.Item href="/ordersReceived">הזמנות שהתקבלו</NavDropdown.Item>
                </Nav>
                <Nav className="mr-auto ml-auto">
                    <Navbar.Brand href="/">דף הבית</Navbar.Brand>
                    <Navbar.Brand href="/myProducts">המוצרים שלנו</Navbar.Brand>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/orderHistory">הזמנות שלי</Nav.Link>
                    <NavDropdown title="התחבר/הרשם" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/login">התחברות</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/register">הרשמה</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/updateDetails">עדכן פרטים</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    
                    <Nav.Link href="/cart">הסל שלי  
                        <FontAwesomeIcon className="fas" icon={faShoppingCart} className="mr-1 ml-1"/>
                        <Badge pill className="badge">1</Badge>
                    </Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
  
        <Switch>

            <Route exact path="/">
            <HomePage />
            </Route>

            <Route exact path="/myProducts">
            <MyProducts />
            </Route>

            <Route exact path="/cart">
            <Cart />
            </Route> 

            <Route exact path="/login">
            <LogIn setDetailsinputs={setDetailsinputs} inputsDetails={inputsDetails}/>
            </Route> 

            <Route exact path="/register">
            <Register setDetailsinputs={setDetailsinputs} inputsDetails={inputsDetails} />
            </Route> 

            <Route exact path="/contactUs">
            <ContactUs setDetailsinputs={setDetailsinputs} inputsDetails={inputsDetails} />
            </Route> 

            <Route exact path="/recommendations">
            <Recommendations setDetailsinputs={setDetailsinputs} inputsDetails={inputsDetails}/>
            </Route> 

            <Route exact path="/about">
            <About />
            </Route> 

            <Route exact path="/addproduct">
            <AddProduct />
            </Route> 

            <Route exact path="/product">
            <Product/>
            </Route> 

            <Route exact path="/orderCompletion">
            <OrderCompletion setDetailsinputs={setDetailsinputs} inputsDetails={inputsDetails}/>
            </Route> 

            <Route exact path="/orderHistory">
            <OrderHistory/>
            </Route> 

            <Route exact path="/updateDetails">
            <UpdateDetails  setDetailsinputs={setDetailsinputs} inputsDetails={inputsDetails}/>
            </Route> 

            <Route exact path="/ordersReceived">
            <OrdersReceived/>
            </Route> 


      </Switch>
  </Router>
  
)}

export default App