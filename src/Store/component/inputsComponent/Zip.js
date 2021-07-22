import validation from "../../function/validation"
import {Form,InputGroup} from "react-bootstrap"
import {FaAddressCard} from "react-icons/fa"


function Zip(props){
    return <> 
        <InputGroup hasValidation>
        <InputGroup.Text className="input-icon-background"><FaAddressCard className="input-icon"/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name="zip"
        defaultValue={props.zip}
        isInvalid = {props.inputs["zip"].inValid}
        placeholder="מיקוד" 
        onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
        {props.inputs["zip"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
    </>
}

export default Zip