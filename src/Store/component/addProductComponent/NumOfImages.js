import {Form, InputGroup} from "react-bootstrap"
import validation from "../../function/validation"



function NumOfImages(props){
    return <>
        <InputGroup hasValidation>
            <Form.Control 
            type="number" 
            placeholder="מספר תמונות הנדרש להעלות"
            name="quntityOfImages" 
            isInvalid = {props.newProduct["quntityOfImages"].inValid}
            min={1}
            onBlur={(e)=>{props.setNewProduct(validation(e.target,props.newProduct))}}/>
            {props.newProduct["quntityOfImages"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </>
}

export default NumOfImages