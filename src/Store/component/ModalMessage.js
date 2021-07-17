import {Modal, Button, Row} from "react-bootstrap"
import {useHistory} from "react-router-dom"


 function ModalMessage(props){

    const history = useHistory()

    function sendToHomePage(){
        history.push("/")
    }

    return <>
      <Modal
        size="md"
        show={props.smShow}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header >
          <Modal.Title id="example-modal-sizes-title-sm">
           {props.headerModal}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>{props.numOrder}</h5>
            <p>{props.textModal}</p>
            <Row className="justify-content-center">
                <Button variant="dark" className="mt-3" onClick = {()=>sendToHomePage()}>אישור</Button>
            </Row>
        </Modal.Body>
      </Modal>
    </>
}

export default ModalMessage