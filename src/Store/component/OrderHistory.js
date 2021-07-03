import {Container,Table,Row,Col,Accordion,Card,Button} from "react-bootstrap"
import {useEffect, useState} from "react"
import "../css/product.css"
import {getOrdersByUser} from "../Dal/api"

function OrderHistory(){

    const [myOrders, setMyOrders] = useState([])
    useEffect(() => { 
        getMyOrders()
    },[])

    
    async function getMyOrders(){
        const userId = JSON.parse(localStorage.getItem("user")).id
        try{
            const userOrders = await getOrdersByUser(userId)
            setMyOrders(userOrders)
        }
        catch{
            setMyOrders([])
        }
    }

    return <>
    <Container className="mt-2">
        <h1>מוצרים שהזמנתי</h1>

        {!myOrders&&<div className="order-summary text-center mt-5">
            <h3>לא קיים הזמנות</h3>
        </div>}

        {myOrders.map(order => 
            <Row className="justify-content-center mt-4">
                <Col xs={12} md={9}>
                    <Table responsive="sm" className="card-product" >
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
                                <td>{order.date}</td>
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
                                    <Accordion.Toggle as={Button} variant="light" eventKey="0" className="mr-3">
                                        הצג מוצרים
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="px-0">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>שם מוצר</th>
                                                    <th>גודל</th>
                                                    <th>תמונה</th>
                                                    <th>מחיר</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.products.map(product =>
                                                <tr>
                                                    <td>{product.name}</td>
                                                    <td>{product.size}</td>
                                                    <td><img src={product.image} style={{width:"80px"}}></img></td>
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