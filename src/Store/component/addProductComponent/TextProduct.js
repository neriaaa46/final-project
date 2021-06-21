import {Form} from "react-bootstrap"


function TextProduct(){
    return <>
      <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mr-3">הסבר על המוצר</Form.Label>
            <Form.Control 
            as="textarea" 
            name="textArea"
            rows={3}  />
        </Form.Group>
    </>
}

export default TextProduct