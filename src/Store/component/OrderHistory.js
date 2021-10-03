import {Container,Table,Row,Col,Accordion,Card,Button} from "react-bootstrap"
import {useEffect, useState} from "react"
import { useHistory } from "react-router"
import "../css/index.css"
import {pathImages} from "../Dal/api"
import {getOrdersByUser} from "../Dal/api"

function OrderHistory(){

    const history = useHistory()

    const [myOrders, setMyOrders] = useState([])
    useEffect(() => { 
        if(!localStorage.getItem("user")){
            history.push("/")
        } else{
            getMyOrders()
        }
    },[])

    
    async function getMyOrders(){
        const userId = JSON.parse(localStorage.getItem("user")).id
        try{
            const userOrders = await getOrdersByUser(userId)
            setMyOrders(userOrders)
        }
        catch(error){
            console.log(error.message)
            setMyOrders([])
        }
    }

    return <>
    {console.log(myOrders)}
    <Container className="mt-2">
        <h1>מוצרים שהזמנתי</h1>
        {(myOrders.length===0)&&<div className="order-summary text-center mt-5">
            <h3>לא קיימות הזמנות</h3>
        </div>}
        {myOrders.map((order, index) => 
            <Row className="justify-content-center mt-4" key={index}>
                <Col xs={12} md={9}>
                    <Table responsive="sm" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>מספר הזמנה</th>
                                <th>תאריך</th>
                                <th>כתובת</th>
                                <th>מיקוד</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{order.orderId}</td>
                                <td>{order.date.slice(0,10)}</td>
                                <td>{order.address}</td>
                                <td>{order.zip}</td>
                            </tr>
                            <tr>
                                <td colSpan="1"> סה"כ מוצרים : {order.products.length}</td>
                                <td colSpan="3"> מחיר כולל : {order.totalPrice} &#8362;</td>
                            </tr>
                            <tr>
                                <td colSpan="4" className="px-0">
                                <Accordion>
                                    <Accordion.Toggle as={Button} variant="light" eventKey="0" className="mr-3 py-0">
                                        הצג מוצרים
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="px-0">
                                        <Table>
                                            <thead className="accordion-order-history">
                                                <tr>
                                                    <th>שם מוצר</th>
                                                    <th>גודל</th>
                                                    <th>תמונה</th>
                                                    <th>מחיר</th>
                                                </tr>
                                            </thead>
                                            <tbody className="accordion-order-history">
                                                {order.products.map((product, index) =>
                                                <tr key={index}>
                                                    <td>{product.name}</td>
                                                    <td>{product.size}</td>
                                                    <td><img src={`${pathImages}${product.image}`} style={{width:"100px"}}></img></td>
                                                    <td>{product.price} &#8362;</td>
                                                </tr>)}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion></td>
                            </tr>
                        </tbody>
                    </Table>
                    
                </Col>
            </Row>)}
    </Container>
    </>
}

export default OrderHistory
