import {InputGroup,Form} from "react-bootstrap"
import {GiConfirmed} from "react-icons/gi"
import validation from "../../function/validation"



function ConfirmPassword(props){
    return <>
        <div>
        <InputGroup hasValidation className="inputs">
            <InputGroup.Text><GiConfirmed/></InputGroup.Text>
            <Form.Control 
            type="password"
            name="confirmPassword"
            required placeholder="אימות סיסמא" 
            isInvalid = {props.inputs["confirmPassword"].inValid}
            onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
            {props.inputs["confirmPassword"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
        </div>
    </>
}

export default ConfirmPassword