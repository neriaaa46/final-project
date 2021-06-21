import product1 from "../img/product1.png"
import {Card,Container,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../css/product.css"





function MyProducts(){
    return <>
     <Container className="d-flex flex-wrap mx-auto mt-5">
         <Row>
            <Col xs={8} md={4} lg={3} className="mb-3 mb-3 mx-auto mx-md-0">
                <Card className="card">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <div>
                    <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                </div>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={8} md={4} lg={3} className="mb-3 mx-auto mx-md-0">
                <Card className="card">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <div>
                    <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                </div>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={8} md={4} lg={3} className="mb-3 mx-auto mx-md-0">
                <Card className="card">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <div>
                    <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                </div>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={8} md={4} lg={3} className="mb-3 mx-auto mx-md-0">
                <Card className="card">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <div>
                    <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                </div>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </Col>
           
            </Row>              
        </Container>



        {/* <Container className="d-flex flex-wrap mx-auto mt-5">
            <Row className="mx-5">
            <div className="ml-3">
                <Card style={{ width: '14rem' }} className="card mb-3">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </div>
            <div className="ml-3">
                <Card style={{ width: '14rem' }} className="card mb-3">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </div>
            <div className="ml-3">
                <Card style={{ width: '14rem' }} className="card mb-3">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </div>
            <div className="ml-3">
                <Card style={{ width: '14rem' }} className="card mb-3">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </div>
            <div className="ml-3">
                <Card style={{ width: '14rem' }} className="card mb-3">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </div>
            <div className="ml-3">
                <Card style={{ width: '14rem' }} className="card mb-3">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </div>
            <div className="ml-3">
                <Card style={{ width: '14rem' }} className="card mb-3">
                <h4 className="text-center mb-3">בלוק ריבוע</h4>
                <Link to="/product"><Card.Img  variant="top" src = {product1} /></Link>
                <Card.Body>
                    <h6 className="text-center">
                        גודל - 10X10
                    </h6>
                    <h5 className="text-center">
                    מחיר - 80 &#8362;
                    </h5>
                </Card.Body>
                </Card>
            </div>
            </Row>
                
        </Container> */}
    </>
}

export default MyProducts