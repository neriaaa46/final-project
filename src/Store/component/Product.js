import product1 from "../img/product1.png"
import {InputGroup,Container,Row,Form,Button, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../css/product.css"

function Product(){



    return <>
    <Container className='mt-5'>
        <Row className="justify-content-around card-product">
                <Col xs={12} md={6}>
                    <img className="img-fluid" alt="product" src={product1} width="300px" ></img>
                    <h2 className="mt-2 mb-5"> מחיר - 80 &#8362;</h2>
                </Col>
                <Col xs={12} md={6}>
                    <h3>שם המוצר : בלוק עץ ריבוע</h3>
                    <h4>גודל המוצר : 10x10</h4>
                    <p>בלוק עץ עליו מודפס תמונה באיכות גבוהה מאוד עם המכשור המתקדם ביותר  </p>
                    <p>מזכרת מדהימה לאנשים שאוהבים, פריט עיצובי מתאים לכל בית חדר משרד</p>
                    <p>הצוות שלנו ידאג להוציא את המוצר בצורה הטובה ביותר </p>

                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>העלה 1 תמונות</Form.Label>
                        <Form.Control type="file" multiple/>
                    </Form.Group> 

                    <Row className="mt-5">
                        <Link to="/cart"><Button className="ml-2  mb-3" variant="light">הוסף לסל שלי</Button></Link>
                       <Link to="/myProducts"><Button className="" variant="light">חזור למוצרים שלנו</Button></Link>
                    </Row>

                </Col>
            </Row>   
          </Container>

    </>
}

export default Product

