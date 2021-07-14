import {InputGroup,Form} from "react-bootstrap"
import validation from "../../function/validation"

function NameProduct(props){
    return <>
         <div>
        <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="name"
        defaultValue={props.name}
        isInvalid = {props.product["name"].inValid}
        placeholder="שם"
        onBlur={(e)=>{props.setProduct(validation(e.target,props.product))}}/>
        {props.product["name"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
        </div>
    </>
}

export default NameProduct