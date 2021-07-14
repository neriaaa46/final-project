import {Form} from "react-bootstrap"
import validation from "../../function/validation"

function TextProduct(props){
    return <>
      <div style={{height:"125px"}}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mr-3">תיאור המוצר</Form.Label>
            <Form.Control 
            as="textarea" 
            name="description"
            rows={3}  
            defaultValue={props.description}
            isInvalid = {props.product["description"].inValid}
            onBlur={(e)=>{props.setProduct(validation(e.target,props.product))}}/>
            {props.product["description"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </Form.Group>
        </div>
    </>
}

export default TextProduct