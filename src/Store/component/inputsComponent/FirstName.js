import {BsPersonCheck} from "react-icons/bs"
import {Form,InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function FirstName(props){
return <>
     <InputGroup hasValidation>
        <InputGroup.Text><BsPersonCheck/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name="firstName"
        isInvalid = {props.inputsDetails["firstName"].inValid}
        placeholder="שם פרטי" 
        onBlur={(e)=>{props.setDetailsinputs(validation(e.target,props.inputsDetails))}}/>
        {props.inputsDetails["firstName"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
</>
}

export default FirstName