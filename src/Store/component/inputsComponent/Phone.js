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
        placeholder="פלאפון"
        isInvalid = {props.inputsDetails["phone"].inValid}
        onBlur={(e)=>{props.setDetailsinputs(validation(e.target,props.inputsDetails))}}/>
         {props.inputsDetails["phone"].errors.map((value,index)=>
        {return <Form.Control.Feedback key={index} type="invalid"> {value} </Form.Control.Feedback>})}
    </InputGroup>
</>
}

export default Phone