import {InputGroup,Form} from "react-bootstrap"
import {GiConfirmed} from "react-icons/gi"
import validation from "../../function/validation"



function ConfirmPassword(props){
    return <>
        
        <InputGroup hasValidation className="inputs">
            <InputGroup.Text><GiConfirmed/></InputGroup.Text>
            <Form.Control 
            type="password"
            name="confirmPassword"
            required placeholder="אימות סיסמא" 
            isInvalid = {props.inputsDetails["confirmPassword"].inValid}
            onBlur={(e)=>{props.setDetailsinputs(validation(e.target,props.inputsDetails))}}/>
            {props.inputsDetails["confirmPassword"].errors.map((value,index)=>
            {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </>
}

export default ConfirmPassword