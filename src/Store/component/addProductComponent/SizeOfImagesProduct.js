import {InputGroup,Form} from "react-bootstrap"
import validation from "../../function/validation"

function SizeOfImagesProduct(props){
    return <>
        <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="size"
        isInvalid = {props.newProduct["size"].inValid}
        placeholder="גודל"
        onBlur={(e)=>{props.setNewProduct(validation(e.target,props.newProduct))}}/>
        {props.newProduct["size"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </>
}

export default SizeOfImagesProduct