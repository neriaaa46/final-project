import {Form} from "react-bootstrap"
import validation from "../../function/validation"

function TextBox(props) {
    return <>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mr-3">כתוב לנו</Form.Label>
            <Form.Control 
            as="textarea" 
            name="text"
            rows={3}  
            isInvalid = {props.inputs["text"].inValid}
            onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
            {props.inputs["text"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </Form.Group>
    </>
}

export default TextBox