import {Container,Row,Col,Button} from "react-bootstrap"
import HeaderProduct from "./addProductComponent/HeaderProduct"
import ImageProduct from "./addProductComponent/ImageProduct"
import NumOfImages from "./addProductComponent/NumOfImages"
import PriceProduct from "./addProductComponent/PriceProduct"
import SizeOfImagesProduct from "./addProductComponent/SizeOfImagesProduct"
import TextProduct from "./addProductComponent/TextProduct"


function AddProduct(){
    return <>
    <Container>
        <h1>הוספת מוצר :</h1>
            
            <Row className="justify-content-center">
                <Col xs={10} md={4}>
                    <Col className="mt-3">
                        <HeaderProduct/>
                    </Col>
                    <Col className="mt-3">
                        <PriceProduct/>
                    </Col>
                </Col>

                <Col xs={10} md={4}>
                    <Col className="mt-3">
                        <NumOfImages/>
                    </Col>
                    <Col className="mt-3">
                        <SizeOfImagesProduct/>
                    </Col>
                </Col>
            </Row>
           
            <Row className="justify-content-center mt-4 mr-1">
                <Col xs={10} md={8}>
                    <ImageProduct/>
                </Col>
            </Row>         

            <Row className="justify-content-center mt-3">
                <Col xs={10} md={8}>
                    <TextProduct/>
                </Col>
            </Row>           
            <Row className="justify-content-center mt-3 mb-3">
                <Button variant="light" className="col-4 col-md-2 ml-4" >הוסף מוצר</Button>
            </Row>
              
    </Container>
    
    </>
}

export default AddProduct