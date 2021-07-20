import {Container,Modal, Carousel} from "react-bootstrap"
import {pathOrdersImage} from "../../Dal/api"



function ModalImages(props){

    return <>
        <Container>
            <Modal size="xs" id="modal1" show={props.showModalImages} onHide={props.handleCloseImages}>
                    <Modal.Body >
                        <Carousel>
                        {props.arrayImages.map((imagesProduct)=>{
                        return <Carousel.Item>
                                <img
                                className="d-block mx-auto"
                                src = {`${pathOrdersImage}${imagesProduct}`}
                                alt = "First slide"
                                />
                            </Carousel.Item>})}
                    </Carousel>
                    </Modal.Body>
            </Modal>
        </Container>
    </>
}


export default ModalImages