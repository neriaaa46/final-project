import {Form, InputGroup} from "react-bootstrap"
import validation from "../../function/validation"



function NumOfImages(props){
    return <>
        <div>
        <InputGroup hasValidation>
            <Form.Control 
            type="number" 
            placeholder="מספר תמונות הנדרש להעלות"
            name="quantityImages" 
            defaultValue={props.quantityImages}
            isInvalid = {props.product["quantityImages"].inValid}
            min={1}
            onBlur={(e)=>{props.setProduct(validation(e.target,props.product))}}/>
            {props.product["quantityImages"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
        </div>
    </>
}

export default NumOfImages