import {Table,ButtonGroup,Button,Row,Col} from "react-bootstrap"
import { useState, useEffect } from "react"
import { GiClick } from "react-icons/gi"
import ModalOrderDetails from "./ModalOrderDetails"
import {updateStatusOrder,getStatusOrder} from "../../Dal/api"


function OrdersTable(props){

    const [showModal, setShowModal] = useState(false)
    const [status, setStatus] = useState("")
   
    useEffect(()=>{
        getStatus()
    },[])

    async function getStatus(){
        try{
            const statusOrder = await getStatusOrder(props.order.orderId)
            setStatus(statusOrder)
        }
        catch(error){
            console.log(error.message);
        }
    }

    async function changeStatus(statusId, statusOrderToClass){
        const {status} = await updateStatusOrder(props.order.orderId,statusId)
        if(status === "ok"){
            setStatus(statusOrderToClass)
        }
   }
   
    const handleShow = () => {
        setShowModal(true);
    } 
    const handleClose = () => {
        setShowModal(false);
    } 
   
   
    return <>
    <Row className="justify-content-center">
        <ModalOrderDetails handleClose={handleClose} showModal={showModal} order={props.order}/>
        <Col xs={12} md={10} lg={7}>
        <Table striped bordered hover size="sm" className={`card-product status-${status} mt-4`}>
            <thead>
                <tr>
                    <th>מספר הזמנה</th>
                    <th>תאריך</th>
                    <th>פרטי הזמנה</th>
                    <th>סטאטוס</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.order.orderId}</td>
                    <td>{props.order.date.slice(0,9)}</td>
                    <td><GiClick size={30} onClick={handleShow} className="show-orders"/></td>
                    <td>
                        <ButtonGroup size="sm">
                            <Button variant="warning" className="ml-1" onClick={()=>changeStatus(2,"inProgress")}>בהכנה</Button>
                            <Button variant="info" className="ml-1" onClick={()=>changeStatus(3,"ready")}>מוכן</Button>
                            <Button variant="success" className="ml-1" onClick={()=>changeStatus(4,"sent")}>נשלח</Button>
                        </ButtonGroup>
                    </td> 
                </tr>
            </tbody>
        </Table>
        </Col>
    </Row>
</>
}

export default OrdersTable