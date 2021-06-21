import validation from "../../function/validation"
import {Form,InputGroup} from "react-bootstrap"
import {FaAddressCard} from "react-icons/fa"


function Zip(props){
    return <> 
        <InputGroup hasValidation>
        <InputGroup.Text><FaAddressCard/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name="zip"
        isInvalid = {props.inputsDetails["zip"].inValid}
        placeholder="מיקוד" 
        onBlur={(e)=>{props.setDetailsinputs(validation(e.target,props.inputsDetails))}}/>
        {props.inputsDetails["zip"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
    </>
}

export default Zip