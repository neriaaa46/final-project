import "../../css/ExplanationOfUse.css";
import { Container, Col, Row } from "react-bootstrap"
import { FaRegHandPointUp, FaShippingFast} from "react-icons/fa"
import { ImCloudUpload } from "react-icons/im"


function ExplanationOfUse() {
  return (
    <Container className="explanation">
      <Row className="justify-content-center">

        <Col xs={7} md={4} className="text-center my-2">
          <div className="border border-dark explanation-div">
            <h6 className="pt-1">שלב ראשון</h6>
            <FaRegHandPointUp size={70} className="my-2"/>
            <p>בחר את המוצר המתאים עבורך</p>
          </div>
        </Col>
        
        <Col xs={7} md={4} className="text-center my-2">
          <div className="border border-dark explanation-div">
            <h6 className="pt-1">שלב שני</h6>
            <ImCloudUpload size={70} className="my-2"/>
            <p>העלה את התמונות האהובות עליך</p>
          </div>
        </Col>

        <Col xs={7} md={4} className="text-center my-2">
          <div className="border border-dark explanation-div">
            <h6 className="pt-1">שלב שלישי</h6>
            <FaShippingFast size={70} className="my-2"/>
            <p>אל דאגה משלוח יגיע במהירות אל ביתך</p>
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default ExplanationOfUse;
