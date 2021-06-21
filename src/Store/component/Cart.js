import product1 from "../img/product1.png"
import {Container,Button,Table} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../css/product.css"



function Cart(){
    return <>

    <Container className="mt-5">
        <h1>הסל שלי :</h1>
        <Table responsive="sm" className="card-product mt-4" >
            <thead>
            <tr>
                <th>#</th>
                <th>פריט</th>
                <th>תמונה</th>
                <th>גודל</th>
                <th>מחיר</th>
                <th>עריכה</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>בלוק עץ ריבוע</td>
                <td><img className="img-fluid" alt="product" src={product1} width="100x" ></img></td>
                <td>10X10</td>
                <td>80 &#8362;</td>
                <td className="d-flex flex-column">
                        <Link to="/product"><Button className="btn-table mb-4" variant="light">ערוך מוצר</Button></Link>
                        <Button variant="light" className="btn-table">מחק מוצר</Button>
                </td>
            </tr>
            </tbody>
        </Table>

        <div className="order-summary text-center">
            <h3 className="mb-4">סיכום הזמנה:</h3>
            <h5 className="mb-2"> מחיר הזמנה כולל - 80 &#8362;</h5>
            <h5 className="mb-4">מספר מוצרים כולל - 1</h5>
            <Link to="/orderCompletion"><Button variant="light" className="ml-5">בצע הזמנה</Button></Link>
            <Button variant="light">נקה את הסל</Button>
        </div>
  </Container>
    </>
}

export default Cart