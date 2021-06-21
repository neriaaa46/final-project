import {InputGroup,Form} from "react-bootstrap"
import {RiLockPasswordFill} from "react-icons/ri"
import validation from "../../function/validation"



function Password(props){
    return <>
        
        <InputGroup hasValidation>
            <InputGroup.Text><RiLockPasswordFill/></InputGroup.Text>
            <Form.Control 
            type="password"
            name="password"
            required placeholder="סיסמא"
            isInvalid = {props.inputsDetails["password"].inValid}
            onBlur={(e)=>{props.setDetailsinputs(validation(e.target,props.inputsDetails))}} />
            {props.inputsDetails["password"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </>
}

export default Password