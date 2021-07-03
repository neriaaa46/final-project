import {InputGroup,Form} from "react-bootstrap"
import validation from "../../function/validation"



function PriceProduct(props){
    return <>
        <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="price"
        isInvalid = {props.newProduct["price"].inValid}
        placeholder="מחיר"
        onBlur={(e)=>{props.setNewProduct(validation(e.target,props.newProduct))}}/>
        {props.newProduct["price"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </>
}

export default PriceProduct