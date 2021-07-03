import {FcPhoneAndroid} from "react-icons/fc"
import {Form,InputGroup} from "react-bootstrap"
import validation from "../../function/validation"


function Phone(props){
return <>
     <InputGroup hasValidation>
        <InputGroup.Text><FcPhoneAndroid/></InputGroup.Text>
        <Form.Control 
        type="text" 
        name="phone"
        defaultValue={props.phone}
        placeholder="פלאפון"
        isInvalid = {props.inputs["phone"].inValid}
        onBlur={(e)=>{props.setInputs(validation(e.target,props.inputs))}}/>
         {props.inputs["phone"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
</>
}

export default Phone