import validation from "../../function/validation"
import {Form,InputGroup} from "react-bootstrap"
import {FaRegAddressCard} from "react-icons/fa"


function Address(props){
    return <> 
        <InputGroup hasValidation>
        <InputGroup.Text><FaRegAddressCard/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name="address"
        isInvalid = {props.inputsDetails["address"].inValid}
        placeholder="כתובת" 
        onBlur={(e)=>{props.setDetailsinputs(validation(e.target,props.inputsDetails))}}/>
        {props.inputsDetails["address"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
    </>
}

export default Address