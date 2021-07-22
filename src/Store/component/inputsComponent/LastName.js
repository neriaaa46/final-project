import {BsPersonCheckFill} from "react-icons/bs"
import {Form,InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function LastName(props){
return <>
    <div>
    <InputGroup hasValidation>
        <InputGroup.Text className="input-icon-background"><BsPersonCheckFill className="input-icon"/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name={"lastName"}
        defaultValue = {props.inputs.lastName.value}
        isInvalid = {props.inputs["lastName"].inValid} 
        placeholder="שם משפחה" 
        onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
            {props.inputs["lastName"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
    </div>
</>
}

export default LastName