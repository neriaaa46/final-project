import {InputGroup,Form} from "react-bootstrap"
import validation from "../../function/validation"

function SizeOfImagesProduct(props){
    return <>
        <div>
        <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="size"
        isInvalid = {props.product["size"].inValid}
        defaultValue={props.size}
        placeholder="גודל"
        onBlur={(e)=>{props.setProduct(validation(e.target,props.product))}}/>
        {props.product["size"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
        </div>
    </>
}

export default SizeOfImagesProduct