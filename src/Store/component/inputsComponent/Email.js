import {InputGroup,Form} from "react-bootstrap"
import {HiOutlineMail} from "react-icons/hi"
import validation from "../../function/validation"



function Email(props){
    return <>
        
        <InputGroup hasValidation>
            <InputGroup.Text><HiOutlineMail/></InputGroup.Text>
            <Form.Control type="email"
                          required placeholder="דואר אלקטרוני"
                          name="email"
                          isInvalid = {props.inputs["email"].inValid}
                          className="inputs"
                          onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
                {props.inputs["email"].errors.map((value,index)=>
                {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
        </InputGroup>
    </>
}

export default Email