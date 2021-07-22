import {Navbar, Nav, NavDropdown, Badge} from "react-bootstrap"
import {  FaShoppingCart } from "react-icons/fa"
import {  BsFillPersonLinesFill } from "react-icons/bs"
import {Link, useHistory} from "react-router-dom" 
import Cookies from "js-cookie"
import "../css/index.css"

function NavBar(props){

    const history = useHistory()


    function logOut(){
        props.setIsLogin(false) 
        props.setIsAdmin(false)
        props.setNummberOfCartProducts(0)
        localStorage.clear()
        Cookies.remove("user")
        Cookies.remove("admin")
        history.push("/")
    }

    // bg="light" variant="light"
    return <>
        <Navbar collapseOnSelect expand="lg" className="nav-bar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown.Item as={Link} to="/about" className="link-nav">אודות</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/contactUs" className="link-nav">צור קשר</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/recommendations" className="link-nav">המלצות</NavDropdown.Item>
                   
                </Nav>
                <Nav className="mr-auto ml-auto">
                    <Navbar.Brand  as={Link} to="/" className="link-nav">דף הבית</Navbar.Brand>
                    <Navbar.Brand as={Link} to="/myProducts" className="link-nav">המוצרים שלנו</Navbar.Brand>
                </Nav>
                <Nav className="mr-auto">

                    <NavDropdown title={<BsFillPersonLinesFill size={22} className="nav-person"/>} id="collasible-nav-dropdown">
                        {!props.isLogin&&<NavDropdown.Item as={Link} to="/login" className="link-nav">התחברות</NavDropdown.Item>}
                        {!props.isLogin&&<NavDropdown.Item as={Link} to="/register" className="link-nav">הרשמה</NavDropdown.Item>}
                        {!props.isAdmin&&props.isLogin&&<NavDropdown.Item as={Link} to="/orderHistory" className="link-nav">הזמנות שלי</NavDropdown.Item>}
                        {!!props.isAdmin&&<NavDropdown.Item as={Link} to="/ordersReceived"className="link-nav">הזמנות שהתקבלו</NavDropdown.Item>}
                        {!!props.isAdmin&&<NavDropdown.Item as={Link} to="/addproduct" className="link-nav">הוסף מוצר</NavDropdown.Item>}
                        {props.isLogin&&<NavDropdown.Item as={Link} to="/updateDetails" className="link-nav">עדכן פרטים</NavDropdown.Item>}
                        {props.isLogin&&<NavDropdown.Item onClick={()=>{logOut()}} className="link-nav">התנתק</NavDropdown.Item>}
                    </NavDropdown>
                
                    {!props.isAdmin&&<Nav.Link as={Link} to="/cart"> 
                            <FaShoppingCart size={20} className="ml-1 nav-cart"/>
                            <Badge pill className="badge">{props.numOfCartProducts}</Badge>
                        </Nav.Link>}
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    </>
}

export default NavBar