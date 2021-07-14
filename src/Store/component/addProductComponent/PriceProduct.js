import {InputGroup,Form} from "react-bootstrap"
import validation from "../../function/validation"



function PriceProduct(props){
    return <>
        <div>
        <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="price"
        defaultValue={props.price}
        isInvalid = {props.product["price"].inValid}
        placeholder="מחיר"
        onBlur={(e)=>{props.setProduct(validation(e.target,props.product))}}/>
        {props.product["price"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
        </div>
    </>
}

export default PriceProduct