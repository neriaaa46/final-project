import {InputGroup,Form} from "react-bootstrap"
import validation from "../../function/validation"

function NameProduct(props){
    return <>
        <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="name"
        isInvalid = {props.newProduct["name"].inValid}
        placeholder="שם"
        onBlur={(e)=>{props.setNewProduct(validation(e.target,props.newProduct))}}/>
        {props.newProduct["name"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </>
}

export default NameProduct