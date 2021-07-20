import {BsPersonCheck} from "react-icons/bs"
import {Form,InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function FirstName(props){
return <>
    <div>
     <InputGroup hasValidation>
        <InputGroup.Text><BsPersonCheck/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name="firstName"
        defaultValue = {props.inputs.firstName.value}
        isInvalid = {props.inputs["firstName"].inValid}
        placeholder="שם פרטי" 
        onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
        {props.inputs["firstName"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
    </div>
</>
}

export default FirstName