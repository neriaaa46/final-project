import { useEffect, useState } from "react"
import {Container} from "react-bootstrap"
import "../css/product.css"
import {getAllOrders} from "../Dal/api"
import OrdersTable from "./orderRecivedComponent/OrdersTable"


function OrderReceived(){

    const [orders, setOrders] = useState([])

    useEffect(()=>{
        getOrders()
    },[])


    async function getOrders(){
        try{
            const allOrders = await getAllOrders()
            setOrders(allOrders)
        }
        catch(error){
            setOrders([])
        }
    }

    return <>
        <Container className="mt-2">
            <h1>הזמנות שהתקבלו</h1>
            {(orders.length===0)&&<div className="order-summary text-center mt-5">
            <h3>לא קיימות הזמנות</h3>
            </div>}
            {orders.map(order =>
            <OrdersTable order = {order}/>
            )}
        </Container>
    </>
}

export default OrderReceived