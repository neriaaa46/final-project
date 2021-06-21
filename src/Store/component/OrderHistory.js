import {Container,Table,Row,Col} from "react-bootstrap"
import product1 from "../img/product1.png"


function OrderHistory(){
    return <>
     <Container className="mt-5">
     <h1>מוצרים שהזמנתי</h1>
        <Row className="justify-content-center mt-4">
            <Col xs={12} md={9}>
                <Table responsive="sm" className="card-product" >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>פריט</th>
                        <th>תמונה</th>
                        <th>תאריך</th>
                        <th>כמות</th>
                        <th>גודל</th>
                        <th>מחיר</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>בלוק עץ ריבוע</td>
                        <td><img className="img-fluid" alt="product" src={product1} width="80x" ></img></td>
                        <td>15/06/2021</td>
                        <td>1</td>
                        <td>10X10</td>
                        <td>80 &#8362;</td>
                    </tr>
                    <tr>
                    <td colSpan="3"> סה"כ מוצרים : 1</td>
                    <td colSpan="4"> מחיר כולל : 80 &#8362;</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
    </>
}

export default OrderHistory