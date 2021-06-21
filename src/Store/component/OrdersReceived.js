import {Container,Button,Table} from "react-bootstrap"

function OrderReceived(){
    return <>
        <Container className="mt-5">
            <h1>הזמנות שהתקבלו</h1>
            <Table responsive="sm" className="card-product mt-4" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>מספר הזמנה</th>
                        <th>תאריך</th>
                        <th>כתובת</th>
                        <th>סטאטוס</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1570</td>
                        <td>01.01.2016</td>
                        <td>שרה אהרונסון 23/4 גדרה</td>
                        <td>התקבל</td> 
                    </tr>
                </tbody>
            </Table>
        </Container>
    </>
}

export default OrderReceived