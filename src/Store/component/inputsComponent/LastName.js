import {BsPersonCheckFill} from "react-icons/bs"
import {Form,InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function LastName(props){
return <>
    <InputGroup hasValidation>
        <InputGroup.Text><BsPersonCheckFill/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name={"lastName"}
        isInvalid = {props.inputsDetails["lastName"].inValid} 
        placeholder="שם משפחה" 
        onBlur={(e)=>{props.setDetailsinputs(validation(e.target,props.inputsDetails))}}/>
        {props.inputsDetails["lastName"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
</>
}

export default LastName