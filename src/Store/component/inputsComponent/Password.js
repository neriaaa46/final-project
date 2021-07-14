import {InputGroup,Form} from "react-bootstrap"
import {RiLockPasswordFill} from "react-icons/ri"
import validation from "../../function/validation"



function Password(props){
    return <>
        <div>
        <InputGroup hasValidation>
            <InputGroup.Text><RiLockPasswordFill/></InputGroup.Text>
            <Form.Control 
            type="password"
            name="password"
            required placeholder="סיסמא"
            isInvalid = {props.inputs["password"].inValid}
            onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
            {props.inputs["password"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
        </div>
    </>
}

export default Password