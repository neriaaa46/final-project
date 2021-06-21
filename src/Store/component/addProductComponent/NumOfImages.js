import {Form} from "react-bootstrap"



function NumOfImages(){
    return <>
        <Form.Group>
            <Form.Control type="number" placeholder="מספר תמונות למוצר" min={1}/>
        </Form.Group>
    </>
}

export default NumOfImages