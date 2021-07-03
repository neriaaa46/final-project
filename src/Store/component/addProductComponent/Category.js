import {InputGroup, Form} from "react-bootstrap"
import validation from "../../function/validation"


function Category(props){
    return <>
    <InputGroup hasValidation>
        <Form.Control 
        type="text" 
        name="category"
        isInvalid = {props.newProduct["category"].inValid}
        placeholder="קטגוריה"
        onBlur={(e)=>{props.setNewProduct(validation(e.target,props.newProduct))}}/>
        {props.newProduct["category"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </>
}

export default Category