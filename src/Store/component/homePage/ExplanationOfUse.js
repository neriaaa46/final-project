import "../../css/index.css";
import { Container, Col, Row } from "react-bootstrap"
import { FaRegHandPointUp, FaShippingFast} from "react-icons/fa"
import { ImCloudUpload } from "react-icons/im"


function ExplanationOfUse() {
  return (
    <Container className="explanation">
      <Row className="justify-content-center">

        <Col xs={7} md={4} className="text-center my-2">
          <div className="border border-dark explanation-div">
            <h5 className="pt-1">שלב ראשון</h5>
            <FaRegHandPointUp size={70} className="my-2 explanation-icon"/>
            <p>בחר את המוצר המתאים עבורך</p>
          </div>
        </Col>
        
        <Col xs={7} md={4} className="text-center my-2">
          <div className="border border-dark explanation-div">
          <h5 className="pt-1">שלב שני</h5>
            <ImCloudUpload size={70} className="my-2 explanation-icon"/>
            <p>העלה את התמונות האהובות עליך</p>
          </div>
        </Col>

        <Col xs={7} md={4} className="text-center my-2">
          <div className="border border-dark explanation-div">
          <h5 className="pt-1">שלב שלישי</h5>
            <FaShippingFast size={70} className="my-2 explanation-icon"/>
            <p>אל דאגה משלוח יגיע במהירות אל ביתך</p>
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default ExplanationOfUse;
