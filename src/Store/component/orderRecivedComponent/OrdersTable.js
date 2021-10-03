import { Table, ButtonGroup, Button, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import { GiClick } from "react-icons/gi"
import ModalOrderDetails from "./ModalOrderDetails"
import { updateStatusOrder, getStatusOrder } from "../../Dal/api"
import {whichClassStatus} from "../../function/utils"


function OrdersTable(props) {
  const [showModal, setShowModal] = useState(false)
  const [statusClassName, setStatusClassName] = useState("")

  useEffect(() => {
    getStatus()
  }, [props.order])

  async function getStatus() {
    try {
      const statusClassName = await getStatusOrder(props.order.orderId)
      setStatusClassName(statusClassName)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function changeStatus(statusId, statusOrderToClass) {
    const { status } = await updateStatusOrder(props.order.orderId, statusId)
    if (status === "ok") {
      setStatusClassName(statusOrderToClass)
    }
  }

  const handleShow = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <Row className="justify-content-center">
        <ModalOrderDetails
          handleClose={handleClose}
          showModal={showModal}
          order={props.order}
          statusClassName={statusClassName}
        />
        <Col xs={12} md={10} lg={7}>
          <Table striped bordered hover variant="dark" responsive="sm"
            className={`status-${statusClassName} mt-4`}
          >
            <thead>
              <tr>
                <th>מספר הזמנה</th>
                <th>תאריך</th>
                <th>פרטי הזמנה</th>
                <th>סטאטוס</th>
                <th>שנה סטאטוס</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.order.orderId}</td>
                <td>{props.order.date.slice(0, 10)}</td>
                <td>
                  <GiClick
                    size={30}
                    onClick={handleShow}
                    className="show-orders"
                  />
                </td>
                <td>{whichClassStatus(statusClassName)}</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button
                      className="ml-1 btn-orders-recived-progres"
                      onClick={() => changeStatus(2, "inProgress")}
                    >
                      בהכנה
                    </Button>
                    <Button
                      className="ml-1 btn-orders-recived-ready"
                      onClick={() => changeStatus(3, "ready")}
                    >
                      מוכן
                    </Button>
                    <Button
                      
                      className="ml-1 btn-orders-recived-sent"
                      onClick={() => changeStatus(4, "sent")}
                    >
                      נשלח
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default OrdersTable
