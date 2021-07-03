import {Form} from "react-bootstrap"
import validation from "../../function/validation"

function TextProduct(props){
    return <>
      <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mr-3">כתוב לנו</Form.Label>
            <Form.Control 
            as="textarea" 
            name="description"
            rows={3}  
            isInvalid = {props.newProduct["description"].inValid}
            onBlur={(e)=>{props.setNewProduct(validation(e.target,props.newProduct))}}/>
            {props.newProduct["description"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </Form.Group>
    </>
}

export default TextProduct