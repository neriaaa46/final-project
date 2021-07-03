import {Container,Modal} from "react-bootstrap"
import { useState } from "react"
import LogIn from "../LogIn"
import Register from "../Register"
import "../../css/product.css"


function ModalRegisterOrLogin(props){

    const [shouldLoginOrRegister, setShouldLoginOrRegister] = useState(true)

    return <>
        <Container>
            <Modal size="lg" closeButton show={props.showModal} onHide={props.handleClose}>
                <Container className="modal-register-login">
                    <Modal.Header closeButton>
                        <Container>
                        {shouldLoginOrRegister&&<p>אם עוד לא נרשמת לאתר - <span onClick={()=>setShouldLoginOrRegister(false)}>לחץ כאן להרשמה</span></p>}
                        {!shouldLoginOrRegister&&<p>אם סיימת את ההרשמה לאתר בהצלחה - <span onClick={()=>setShouldLoginOrRegister(true)}>לחץ כאן להתחברות</span></p>}
                        </Container>
                    </Modal.Header>
                    <Modal.Body>
                    {shouldLoginOrRegister&&<LogIn setIsAdmin={props.setIsAdmin} setIsLogin={props.setIsLogin} nextPath="/orderCompletion"/>} 
                    {!shouldLoginOrRegister&&<Register/>}  
                    </Modal.Body>
                </Container>
            </Modal>
        </Container>
    </>
}


export default ModalRegisterOrLogin