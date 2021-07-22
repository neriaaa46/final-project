import validation from "../../function/validation"
import {Form,InputGroup} from "react-bootstrap"
import {FaRegAddressCard} from "react-icons/fa"


function Address(props){
    return <> 
        <InputGroup hasValidation>
        <InputGroup.Text className="input-icon-background"><FaRegAddressCard className="input-icon"/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name="address"
        defaultValue={props.address}
        isInvalid = {props.inputs["address"].inValid}
        placeholder="כתובת" 
        onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
        {props.inputs["address"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
    </>
}

export default Address